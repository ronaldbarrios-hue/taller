import CityRepository from "../../domain/repositories/CityRepository.js";
import cityModel from "../database/models/CityModel.js";

export default class MongoCityRepository extends CityRepository {

  async save(city) {
    const doc = await cityModel.findOneAndUpdate(
      { nombre: city.nombre },
      { edad: city.edad },
      {
        upsert: true,
        returnDocument: "after",
        runValidators: true
      }
    );

    return doc;
  }

  async findAll() {
    return await cityModel.find();
  }

  async findByName(nombre) {
    return await cityModel.findOne({ nombre }) ?? null;
  }

  async delete(nombre) {
    const result = await cityModel.findOneAndDelete({ nombre });

    if (!result) {
      throw new Error(`City with name "${nombre}" not found`);
    }
  }
}
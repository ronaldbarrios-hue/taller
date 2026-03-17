import CountryRepository from "../../domain/repositories/CountryRepository.js";
import countryModel from "../database/models/CountryModel.js";

export default class MongoCountryRepository extends CountryRepository {
async save(country) {

  const doc = await countryModel.findOneAndUpdate(
    { sku: country.sku },
    {
      $set: {
        precio: country.precio
      },
      $setOnInsert: {
        sku: country.sku
      }
    },
    {
      upsert: true,
      returnDocument: "after",
      runValidators: true
    }
  );

  return doc;
}

  async findAll() {
    return await countryModel.find();
  }

  async findBySku(sku) {
    return await countryModel.findOne({ sku }) ?? null;
  }

  async delete(sku) {
    // CAMBIO: Usamos 'sku' para borrar, ya que es tu identificador único
    const result = await countryModel.findOneAndDelete({ sku });
    if (!result) throw new Error(`country with sku "${sku}" not found`);
  }
}
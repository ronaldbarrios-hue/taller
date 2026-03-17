import CityRepository from "../../domain/repositories/CityRepository.js";

export default class InMemoryCityRepository extends CityRepository {
  constructor() {
    super();
    this.cities = [];
  }

  async save(city) {
    const index = this.cities.findIndex(p => p.id === city.id);
    if (index >= 0) {
      this.cities[index] = city;
    } else {
      this.cities.push(city);
    }
    return city;
  }

  async findAll() {
    return this.cities;
  }
}
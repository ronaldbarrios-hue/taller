import CountryRepository from "../../domain/repositories/CountryRepository.js";

export default class InMemoryCountryRepository extends CountryRepository {

  constructor() {
    super();
    this.countries = [];
  }

  async save(country) {
    this.countries.push(country);
    return country;
  }

  async findAll() {
    return this.countries;
  }

}
import CountryRepository from "../../domain/repositories/CountryRepository.js";

export default class InMemoryCountryRepository extends CountryRepository {
  constructor() {
    super();
    this.countries = [];
  }

  async save(country) {
    const index = this.countries.findIndex(p => p.id === country.id);
    if (index >= 0) {
      this.countries[index] = country;
    } else {
      this.countries.push(country);
    }
    return country;
  }

  async findAll() {
    return this.countries;
  }
}
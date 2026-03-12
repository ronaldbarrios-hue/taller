class MongoCountryRepository {
  constructor() {
    this.countries = [];
  }

  async create(country) {
    this.countries.push(country);
    return country;
  }

  async findAll() {
    return this.countries;
  }
}

export default MongoCountryRepository;
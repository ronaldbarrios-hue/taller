import Country from "../../domain/entities/Country.js";

export default class CreateCountry {
  constructor(countryRepository) {
    this.countryRepository = countryRepository;
  }

  async execute({ name, code }) {
    const country = new Country({ name, code });
    return await this.countryRepository.save(country);
  }
}
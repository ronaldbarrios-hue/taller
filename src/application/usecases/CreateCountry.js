import Country from "../../domain/entities/Country.js";

export default class CreateCountry {

  constructor(countryRepository) {
    this.countryRepository = countryRepository;
  }

  async execute({ name, population }) {

    const country = new Country({
      name,
      population
    });

    return await this.countryRepository.save(country);

  }

}
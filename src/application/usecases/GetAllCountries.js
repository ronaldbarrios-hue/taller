export default class GetAllCountries {
  constructor(countryRepository) {
    this.countryRepository = countryRepository;
  }

  async ejecutar() {
    return await this.countryRepository.findAll();
  }
}
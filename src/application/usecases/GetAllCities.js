export default class GetAllCities {
  constructor(cityRepository) {
    this.cityRepository = cityRepository;
  }

  async execute() {
    return await this.cityRepository.findAll();
  }
}
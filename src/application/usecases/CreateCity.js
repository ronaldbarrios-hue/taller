export default class CreateCity {
  constructor(cityRepository) {
    this.cityRepository = cityRepository;
  }

  async execute({ nombre, edad }) {  // <--- debe llamarse "execute"
    const city = { nombre, edad };    // o new City({ nombre, edad }) si usas la entidad
    return await this.cityRepository.save(city);
  }
}
export default class CityController {
  constructor({ createCity, getAllCities }) {
    this.createCity = createCity;
    this.getAllCities = getAllCities;
  }

  async create(req, res) {
    try {
      const city = await this.createCity.execute(req.body);
      res.status(201).json(city);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const cities = await this.getAllCities.execute();
      res.status(200).json(cities);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
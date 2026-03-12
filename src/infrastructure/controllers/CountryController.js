export default class CountryController {

  constructor({ createCountry, getAllCountries }) {
    this.createCountry = createCountry;
    this.getAllCountries = getAllCountries;
  }

  async create(req, res) {
    try {
      const country = await this.createCountry.execute(req.body);
      res.status(201).json(country);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const countries = await this.getAllCountries.execute();
      res.status(200).json(countries);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

}
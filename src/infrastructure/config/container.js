import InMemoryCountryRepository from "../repositories/InMemoryCountryRepository.js";

import CreateCountry from "../../application/usecases/CreateCountry.js";
import GetAllCountries from "../../application/usecases/GetAllCountries.js";

import CountryController from "../controllers/CountryController.js";

const repository = new InMemoryCountryRepository();

const createCountry = new CreateCountry(repository);
const getAllCountries = new GetAllCountries(repository);

const countryController = new CountryController({
  createCountry,
  getAllCountries
});

export { countryController };
// --- IMPORTACIONES ---
import MongoCountryRepository from "../repositories/MongoCountryRepository.js"; 
import CreateCountry from "../../application/usecases/CreateCountry.js";
import GetAllCountries from "../../application/usecases/GetAllCountries.js";
import CountryController from "../controllers/CountryController.js"; 

import MongoCityRepository from "../repositories/MongoCityRepository.js"; 
import CreateCity from "../../application/usecases/CreateCity.js";
import GetAllCities from "../../application/usecases/GetAllCities.js";
import CityController from "../controllers/CityController.js";

// --- 1. REPOSITORIOS (Dales nombres únicos) ---
const countryRepository = new MongoCountryRepository();
const cityRepository = new MongoCityRepository();

// --- 2. CASOS DE USO (Inyecta el repositorio correspondiente) ---
// Countries
const createCountry = new CreateCountry(countryRepository);
const getAllCountries = new GetAllCountries(countryRepository);

// Cities
const createCity = new CreateCity(cityRepository);
const getAllCities = new GetAllCities(cityRepository);

// --- 3. CONTROLADORES ---
const countryController = new CountryController({
  createCountry,
  getAllCountries,
});

const cityController = new CityController({
  createCity,
  getAllCities,
});

// --- 4. EXPORTACIÓN ---
export { countryController, cityController };
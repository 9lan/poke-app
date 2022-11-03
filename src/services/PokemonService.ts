import { pokemonAPI } from "../app/http-common";

const getAll = () => {
  return pokemonAPI.get("/pokemon?limit=2000&offset=0");
};

export const PokemonService = {
  getAll,
};

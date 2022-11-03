import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { PokemonService } from "../services/PokemonService";

export interface PokemonStockHistory {
  date: string;
  time: string;
  stock: number;
  notes: string;
  headline: string;
  pcs?: number;
  lusin?: number;
  totalPcs?: number;
  totalLusin?: number;
}

export interface PokemonResult {
  name: string;
  history: PokemonStockHistory[];
}

export interface IPokemonState {
  results: PokemonResult[];
  selectedPokemon: PokemonResult | null;
  isLoading: boolean;
  step: "LIST" | "DETAIL" | "CONFIRM";
}

const initialState: IPokemonState = {
  results: [],
  selectedPokemon: null,
  isLoading: true,
  step: "LIST",
};

export const retrievePokemons = createAsyncThunk(
  "pokemon/retrieve",
  async (_, thunkApi) => {
    try {
      const response = await PokemonService.getAll();
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue("something went wrong");
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      const isMatch = state.results.find(
        (result) => result.name === action.payload.name
      );
      if (isMatch) {
        isMatch.name = action.payload.name;
        isMatch.history.push({
          date: action.payload.date,
          time: action.payload.time,
          stock: action.payload.stock,
          notes: action.payload.notes,
          headline: action.payload.headline,
        });
      }
      state.step = "DETAIL";
    },
    selectPokemonByName: (state, action) => {
      const { name } = action.payload;
      const match = state.results.find((pokemon) => pokemon.name === name);
      if (match) {
        state.selectedPokemon = match;
      }
    },
    postTempHistory: (state, action) => {
      state.selectedPokemon = {
        name: action.payload.name,
        history: [
          {
            ...action.payload.history,
          },
        ],
      };
      state.step = "CONFIRM";
    },
    resetTempHistory: (state) => {
      state.selectedPokemon = {
        name: "",
        history: [
          {
            date: "",
            time: "",
            stock: 0,
            notes: "",
            pcs: 0,
            lusin: 0,
            totalPcs: 0,
            totalLusin: 0,
            headline: "",
          },
        ],
      };
      state.step = "LIST";
    },
  },
  extraReducers: {
    [retrievePokemons.pending.type]: (state) => {
      state.isLoading = true;
    },
    [retrievePokemons.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.results = [
        ...action.payload.results.map((pokemon: any) => ({
          name: pokemon.name,
          history: [
            {
              date: new Date().toLocaleDateString(),
              time: new Date().toLocaleTimeString(),
              stock: 0,
              notes: "",
              headline: "Stock Awal",
            },
          ],
        })),
      ];
      state.step = "LIST";
    },
    [retrievePokemons.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const selectPokemons = (state: RootState) => state.pokemon;
export const selectedPokemon = (state: RootState) =>
  state.pokemon.selectedPokemon;
export const isStillLoading = (state: RootState) => state.pokemon.isLoading;
export const selectCurrentStep = (state: RootState) => state.pokemon.step;
export const selectUpdatedPokemon = (state: RootState) => state.pokemon.results;

export const {
  addHistory,
  selectPokemonByName,
  postTempHistory,
  resetTempHistory,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;

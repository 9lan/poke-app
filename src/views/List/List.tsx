import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { capitalizeFirstLetter } from "../../app/utils/capitalizeFirstLetter";
import { Search } from "../../components/Search/Search";
import {
  PokemonResult,
  selectPokemons,
  selectPokemonByName,
} from "../../slices/pokemon";
import {
  ListContainer,
  ListTable,
  ListTitle,
  ListDivider,
  ListHead,
  ListItems,
} from "./styled";

export const List: React.FC = () => {
  const pokemons = useAppSelector(selectPokemons);

  const dispatch = useAppDispatch();

  const setConfirm = (name: string) => {
    dispatch(selectPokemonByName({ name }));
  };

  const [query, setQuery] = React.useState("");

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  const filteredPokemons = pokemons.results.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <ListContainer>
      <ListTitle>Stok Pokémon</ListTitle>
      <Search label="Cari Pokémon" onChange={onChangeQuery} value={query} />

      <ListTable>
        <div>
          <ListHead>Nama</ListHead>
          <ListHead>Stok</ListHead>
        </div>
        <ListDivider />
        {query.length > 0 ? (
          <>
            {filteredPokemons.map((pokemon: PokemonResult) => (
              <ListItems
                to={`/pokemon/${pokemon.name}`}
                key={Math.random()}
                onClick={() => {
                  setConfirm(pokemon.name);
                }}
              >
                <>
                  <div id="name">{capitalizeFirstLetter(pokemon.name)}</div>
                  <div id="stock">
                    {pokemon.history.reduce((a: any, b: any) => a + b.stock, 0)}{" "}
                    pcs
                  </div>
                </>
              </ListItems>
            ))}
          </>
        ) : (
          <>
            {pokemons.results.map((pokemon: PokemonResult) => (
              <ListItems
                to={`/pokemon/${pokemon.name}`}
                key={Math.random()}
                onClick={() => {
                  setConfirm(pokemon.name);
                }}
              >
                <>
                  <div id="name">{capitalizeFirstLetter(pokemon.name)}</div>
                  <div id="stock">
                    {pokemon.history.reduce((a: any, b: any) => a + b.stock, 0)}{" "}
                    pcs
                  </div>
                </>
              </ListItems>
            ))}
          </>
        )}
      </ListTable>
    </ListContainer>
  );
};

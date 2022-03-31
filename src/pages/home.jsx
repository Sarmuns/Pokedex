import React from "react";
import Navigate from "../components/Navigate";
import PokemonData from "../components/PokemonData";
import Search from "../components/Search";
import { fetchPokemon } from "../services/getPokemon";

export default function HomePage(){
  const [pokemon, setPokemon] = React.useState();
  const [loading, setLoading] = React.useState(false)

  const getPokemon = async (query) => {
    setLoading(true);
    const response = await fetchPokemon(query);
    const results = await response.json();
    setPokemon(results);
    setLoading(false);
  }
  return(
    <div>
      <Search getPokemon={getPokemon}/>
      {!loading && pokemon ? (
        <PokemonData
        name={pokemon.name}
        id={pokemon.id}
        sprite={pokemon.sprites.front_default}
        shiny={pokemon.sprites.front_shiny}
        abilities={pokemon.abilities}
        stats={pokemon.stats}
        types={pokemon.types} />
        ): null}
      {!loading && pokemon ? (
        <Navigate 
        getPokemon={getPokemon}
        id={pokemon.id}/>        
        ): null}


    </div>
  )
}
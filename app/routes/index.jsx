import { useState } from "react"; 
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Header, Footer, Search, PokeGrid, PokeInfo } from '~/components'
import { getPokemonsApi, getPokemonsURLApi } from '../api';

export default function Index() {
  const data = useLoaderData()
  const [pokemons, setPokemons] = useState(data.results) 
  const [nextUrl, setNextUrl] = useState(data.next)
  const [pokemonSelected, setPokemonSelected] = useState()

  const loadMore = async () => {
    if(nextUrl){
      const response = await getPokemonsURLApi(nextUrl)
      setNextUrl(response.next)
      setPokemons([...pokemons, ...response.results])
    }
  }

  const checkPokemon = (pokemon) =>{
    setPokemonSelected(pokemon)
  }
  
  return (
    <div>
      <Header/>
      <div className="md:flex">
        <Search className='md:hidden'/>
        <div className="w-full h-[120px] flex flex-col items-end px-9 pb-5 md:hidden">
          <PokeInfo pokemon={pokemonSelected}/>
        </div>
        <div className="w-6/6 md:w-4/6">
          <PokeGrid pokemons={pokemons} loadMore={loadMore} checkPokemon={checkPokemon}/>
        </div>
        <div className="w-6/6 hidden mb-2 md:w-2/6 md:h-[calc(100vh-100px)] md:flex md:flex-col md:items-center md:justify-between">
          <Search/>
          <PokeInfo pokemon={pokemonSelected}/>
        </div>
      </div> 
      <Footer/> 
    </div>
  );
}

export const loader = async () => {
  try {
    const response = await getPokemonsApi()
    return json(response)
  } catch (error) {
    console.log(error)
  }
};
import { useState } from "react"; 
import { useLoaderData } from "@remix-run/react"; 
import { Header, Footer, Search, PokeGrid, PokeInfo } from '~/components'
import { getPokemonsApi, getPokemonsURLApi, getPokemonsAllApi } from '../api';

export default function Index() {
  const data = useLoaderData() 
  const {response} = data 
  const [pokemons, setPokemons] = useState(response.results) 
  const [nextUrl, setNextUrl] = useState(response.next)
  const [pokemonSelected, setPokemonSelected] = useState()
  const [pokemonSearch, setPokemonSearch] = useState(null) 

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
        <Search className='md:hidden' loadPokemons={setPokemonSearch}/>
        <div className="w-full h-[120px] flex flex-col items-end px-9 pb-5 md:hidden">
          <PokeInfo pokemon={pokemonSelected} setPokemonSelected={setPokemonSelected}/>
        </div>
        <div className="w-6/6 md:w-4/6">
          <PokeGrid pokemons={pokemonSearch ? pokemonSearch : pokemons} loadMore={loadMore} checkPokemon={checkPokemon} nextUrl={nextUrl} pokemonSelected={pokemonSelected} pokemonSearch={pokemonSearch}/>
        </div>
        <div className="w-6/6 hidden mb-2 md:w-2/6 md:h-[calc(100vh-100px)] md:flex md:flex-col md:items-center md:justify-between">
          <Search loadPokemons={setPokemonSearch} pokemonSelected={pokemonSelected}/>
          <PokeInfo pokemon={pokemonSelected}/>
        </div>
      </div> 
      <Footer/> 
    </div>
  );
}

export const loader = async () => {  
  try {
    const [response, response1] = await Promise.all([getPokemonsApi(), getPokemonsAllApi()]) 
    return {response, response1}
  } catch (error) {
    console.log(error)
  }
};
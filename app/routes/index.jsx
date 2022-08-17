import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Header, PokeGrid } from '~/components'
import { getPokemonsApi } from '../api';

export default function Index() {
  const data = useLoaderData()
  const [pokemons, setPokemons] = useState(data.results) 
  return (
    <div>
      <Header/>
      <div className="md:flex">
        <div className="md:w-2/6">
           <span>PokeInfo</span>
        </div>
        <div className="w-6/6 md:w-4/6">
          <PokeGrid pokemons={pokemons}/>
        </div>
      </div>
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
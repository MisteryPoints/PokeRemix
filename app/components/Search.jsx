import { useState, useEffect } from 'react' 
import { Form, useLoaderData } from '@remix-run/react'
import { createFilter } from 'react-search-input' 

const KEYS_TO_FILTER = ['name']

export function Search(props) { 

    const { className, loadPokemons, setPokemonSelected } = props 
    const [pokemons, setPokemons] = useState([])
    const [searchText, setSearchText] = useState('')
    const data = useLoaderData() 
    const {response1} = data  

    const filteredPokemon = pokemons.filter(
        createFilter(searchText, KEYS_TO_FILTER)
    )

    useEffect(() => {  
        setPokemons(response1.results) 
    }, [])  

    const onSearch = (e) => {
        e.preventDefault()
        if(!searchText) loadPokemons(null)
        else loadPokemons(filteredPokemon)
    }
     
  

    return (
        <Form className={`w-full ${className}`} onSubmit={onSearch}>
            <input type="text" placeholder="Busca tu Pokemon" value={searchText}  onChange={(e) => setSearchText(e.target.value)} className="w-full outline-0 bg-red-200 py-4 px-6 md:rounded-bl-md capitalize" />
        </Form>
    )
}
 
 
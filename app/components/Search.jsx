import { useState, useEffect } from 'react' 
import { createFilter } from 'react-search-input'
import { getPokemonsAllApi } from '~/api'

export function Search(props) {
    const { className } = props
    const [pokemons, setPokemons] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => { 
        (async () => {
            try {
                const response = await getPokemonsAllApi()
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    

    return (
        <form className={`w-full ${className}`}>
            <input type="text" placeholder="Busca tu Pokemon" onChange={(e) => setSearchText(e.target.value)} className="w-full outline-0 bg-red-200 py-4 px-6 md:rounded-bl-md" />
        </form>
    )
}

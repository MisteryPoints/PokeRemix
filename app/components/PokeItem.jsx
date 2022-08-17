import { useEffect } from "react"
import { usePokemon } from '~/hooks'

export function PokeItem(props) {
    const { urlPokemon } = props
    const {loading, pokemon, getPokemonByURL} = usePokemon() 
    
    useEffect(() => {
        getPokemonByURL(urlPokemon)
    }, [urlPokemon])
    
    if(loading) {
        return <span>Cargando...</span>
    }

    return (
        <div>
            <span>{pokemon.name}</span>

        </div>
    )
}

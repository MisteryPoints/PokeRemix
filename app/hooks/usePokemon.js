import { useState } from 'react'
import { getPokemonURLApi } from '~/api'
 
export function usePokemon() {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)

    const getPokemonByURL = async (url) => {
        try {
            setLoading(true)
            const data = await getPokemonURLApi(url)
            setPokemon(data)
            setLoading(false)
        } catch (error) {
            return null
        }
    }

    return {
        pokemon,
        getPokemonByURL,
        loading,
    }
}

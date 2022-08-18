import { useEffect, useState } from "react"
import { GiAbstract118 } from 'react-icons/gi'
import { usePokemon } from '~/hooks'

export function PokeItem(props) {
    const { urlPokemon } = props
    const {loading, pokemon, getPokemonByURL} = usePokemon()
    const [isShown, setIsShown] = useState(true)
    
    console.log(pokemon)

    useEffect(() => {
        getPokemonByURL(urlPokemon)
    }, [urlPokemon])
    
    if(loading) {
        return ( 
        <div className="w-24 h-24 flex items-center justify-center">
            <GiAbstract118 className="animate-spin w-7 h-7"/>
        </div>)
    }

    return (
        <div onMouseEnter={() => setIsShown(false)} onMouseLeave={() => setIsShown(true)} className='hover:bg-slate-500 h-24 rounded-md hover:cursor-pointer w-full flex item-center justify-center' onClick={() => console.log(pokemon.name)}>
            {isShown && (
                <img src={pokemon.sprites.front_default}/>
            )}
            {!isShown && (
                <img src={pokemon.sprites.back_default}/>
            )} 
        </div>
    )
}

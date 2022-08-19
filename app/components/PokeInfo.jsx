 
export function PokeInfo(props) {
    const {pokemon} = props 
    if (!pokemon) return null
    return (
        <div className="h-full w-full mt-2 flex items-end text-center md:flex-col md:items-center md:h-auto">
            <p className='first-letter:uppercase hidden md:block bg-red-600 text-white p-3 rounded-xl text-lg font-bold'>PokeInfo</p> 
            <img src={pokemon.sprites.other.home.front_default} className='hidden md:block'/>
            <div className="w-[60%] text-center md:py-10">
                <div className="bg-red-600 text-white py-3 rounded-tl-md rounded-tr-md text-lg font-bold">
                    Nº {pokemon.id.toString().padStart(3, '0')}
                </div>
                <h2 className="bg-slate-200 mb-6 py-3 rounded-bl-md rounded br-md capitalize">
                    {pokemon.name}
                </h2>
            </div>
            <img src={pokemon.sprites.other.home.front_default} className='h-full md:hidden'/>
        </div>
    )
}

import InfiniteScroll from 'react-infinite-scroller'
import { PokeItem, Loading } from '~/components'



export function PokeGrid(props) {
    const { pokemons, loadMore, checkPokemon, nextUrl, pokemonSelected, pokemonSearch } = props
    let scrollParentRef = null

    return (
        <div className="h-[calc(100vh-72px)] md:h-[calc(100vh-72px)] overflow-x-auto scrollbar scrollbar-thumb-red-600 scrollbar-track-red-100" ref={(ref) => {scrollParentRef = ref}}>
            <InfiniteScroll loadMore={loadMore} hasMore={nextUrl && !pokemonSearch ? true : false} loader={<Loading key={0}/>} useWindow={false} getScrollParent={()=> scrollParentRef}>
                <div className="grid grid-cols-3 sm:grid-cols-6 m-2 md:grid-cols-5 lg:grid-cols-7">
                    {pokemons.map( (pokemon) => ( 
                        <PokeItem key={pokemon.name} urlPokemon={pokemon.url} pokemons={pokemons} checkPokemon={checkPokemon} pokemonSelected={pokemonSelected}/>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}

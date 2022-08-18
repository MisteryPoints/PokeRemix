import InfiniteScroll from 'react-infinite-scroller'
import { PokeItem } from '~/components'


export function PokeGrid(props) {
    const { pokemons } = props
    let scrollParentRef = null

    return (
        <div className="h-[calc(100vh-320px)] md:h-[calc(100vh-72px)] overflow-scroll" ref={(ref) => {scrollParentRef = ref}}>
            <InfiniteScroll loadMore={() => console.log('Mas Pokemons')} hasMore={true} useWindow={false} getScrollParent={()=> scrollParentRef}>
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-7">
                    {pokemons.map( (pokemon) => (
                        <PokeItem key={pokemon.name} urlPokemon={pokemon.url}/>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}

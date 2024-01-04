import { setPokemons } from "./store/slices/pokemon";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import { useEffect } from "react";

export const PokemonApp = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPokemons(2))
  }, [dispatch])

  const { pokemons, isLoading, page } = useAppSelector(state => state.pokemons)

  console.log(page);

  return (
    <>
      <h1>Hola mundo Pokemon!</h1>
      <hr />
      {
        isLoading ? <span>Loading</span> : ''
      }
      {
        pokemons.map(pokemon => (
          <li key={pokemon.name}>{ pokemon.name }</li>
        ))
      }

      <button onClick={ () => dispatch(setPokemons(page+1)) }>
        Next
      </button>
    </>
  )

}

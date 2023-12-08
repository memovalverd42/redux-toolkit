import { setPokemons } from "./store/slices/pokemon";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import { useEffect } from "react";


export const PokemonApp = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPokemons(4))
  }, [dispatch])

  const { pokemons, isLoading, page } = useAppSelector(state => state.pokemons)

  console.log(isLoading);

  return (
    <>
      <h1>Hola mundo Pokemon!</h1>

      {
        pokemons.results.map(pokemon => (
          <p key={pokemon.name}>{pokemon.name}</p>
        ))
      }
    </>
  )

}

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch( getPokemons() );
  }, [])

  return (
    <>
        <h1>Hola mundo Pokemon!</h1>
    </>
  )
}

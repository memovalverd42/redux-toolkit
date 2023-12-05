import { startLoadingPokemons } from "."
import { AppDispatch, RootState } from "../.."

export const getPokemons = ( page: number = 0 ) => {
    page
    return async( dispatch: AppDispatch, getState: RootState ) => {
        dispatch( startLoadingPokemons );

        

    }

}
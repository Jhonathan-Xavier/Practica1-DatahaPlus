
//2) Creamos un initialState
import {useReducer} from "react";

const initialState = {
    contador: 0
}

//4) Creamos el ActionType (Acciones que el reducer va a recibir)
type ActionType =
    | { type: 'incrementar'}
    | { type: 'decrementar'}
    | { type: 'custom', payload: number }; //La acción custom va a recibir un numero. Payload se refiere al argumento que viene en la acción

//3) Creamos el reducer: recibe un state y una action, sería -> const contadorReducer = (state, action)=>{}
const contadorReducer = (state: typeof initialState, action: ActionType) =>{

    switch (action.type){
        case "incrementar":
            return {
                ...state, //Rompemos la referencia para no modificar el original,sino la copia
                contador: state.contador + 1
            }
        case "decrementar":
            return {
                ...state,
                contador: state.contador - 1
            }
        case "custom":
            return {
                ...state,
                contador: action.payload //En la accion custom ejecuta el paylod con el valor que tenga en el botón
            }
        default:
            return state; //Siempre retornar state por defecto
    }


}

//1) Creamos un holaMundo y lo mandamos a llamar en el index
export const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);
  // o también puede ser: const [{contador}, dispatch] = useReducer(contadorReducer, initialState); para no acceder con contadorState.contador

  return(
      <div>
          <h2>Contador: {contadorState.contador}</h2>
          {/*5) el botón dispara la acción de incrementar*/}
          <button onClick={() => dispatch({ type: 'incrementar'})}>+1</button>
          <button onClick={() => dispatch({ type: 'decrementar'})}>-1</button>
          <button onClick={() => dispatch({ type: 'custom', payload: 100})}>100</button>
      </div>
  )
}
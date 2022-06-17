import {useState} from "react";

export const Counter = () => {
    const[counter, setCounter] = useState(0);
    const incrementar = (numero: number): void =>{
        setCounter(counter + numero);
    }

      return(
          <div>
              <h1>Next + TS</h1>
              <p>Valor: {counter}</p>
              <br/>
              <button onClick={() => incrementar(1)}>+1</button>
              <button onClick={() => incrementar(2)}>+2</button>
              <button onClick={() => setCounter(0)}>Resetear</button>
          </div>
      )
}
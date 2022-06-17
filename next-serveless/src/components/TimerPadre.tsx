import {Timer} from "./Timer";
import {useState} from "react";

export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000);

  return(
      <div>
          <p>Milisegundos: {milisegundos}</p>
          <Timer milisegundos={milisegundos}/>
          <button onClick={() => setMilisegundos(1000)}>1000</button>
          <button onClick={() => setMilisegundos(2000)}>2000</button>
      </div>
  )
}
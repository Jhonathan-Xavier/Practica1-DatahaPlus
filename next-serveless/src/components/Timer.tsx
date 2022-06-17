import {useEffect, useRef, useState} from "react";

type TimeArgs = {
    milisegundos: number,
    //Si tuviera más propiedade las pondría aqui, pero la desestrucitración sería: args Timer = (args: TimeArgs) =>
}

export const Timer = ({milisegundos}: TimeArgs) => {
    const [segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timeout>();

    console.log(milisegundos);

    useEffect(() =>{
        console.log('useEffect')
        ref.current && clearInterval(ref.current);
        ref.current = setInterval(() => setSegundos(s => s + 1), 1000);
    },[])


      return(
          <div>
              Timer: <small>{segundos}</small>
          </div>
      )
}
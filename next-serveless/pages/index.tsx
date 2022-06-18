import type { NextPage } from 'next'
import {Counter} from "../src/components/Counter";
import {Usuario} from "../src/components/Usuario";
import {TimerPadre} from "../src/components/TimerPadre";
import {ContadorRed} from "../src/components/Reducer";
import {Formulario} from "../src/components/Formulario";
import {Formulario2} from "../src/components/Formulario2";

const Home: NextPage = () => {
  return (
    <div>
        <h1>UseState</h1>
        <hr/>
        <Counter/>
        <Usuario/>

        <h2>UseEffect & useRef</h2>
        <TimerPadre/>

        <h2>UseReducer</h2>
        <ContadorRed/>

        <h3>Hooks</h3>
        <Formulario/>
        <Formulario2/>
    </div>
  )
}

export default Home

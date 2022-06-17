import type { NextPage } from 'next'
import {Counter} from "../src/components/Counter";
import {Usuario} from "../src/components/Usuario";
import {TimerPadre} from "../src/components/TimerPadre";
import {ContadorRed} from "../src/components/Reducer";
import {Formulario} from "../src/components/Formulario";

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
    </div>
  )
}

export default Home

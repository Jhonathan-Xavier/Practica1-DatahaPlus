import type { NextPage } from 'next'
import {Counter} from "../src/components/Counter";
import {Usuario} from "../src/components/Usuario";

import {TimerPadre} from "../src/components/TimerPadre";

const Home: NextPage = () => {
  return (
    <div>
        <h1>UseState</h1>
        <hr/>
        <Counter/>
        <Usuario/>

        <h2>UseEffect & useRef</h2>
        <TimerPadre/>
    </div>
  )
}

export default Home

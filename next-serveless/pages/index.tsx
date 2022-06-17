import type { NextPage } from 'next'
import {Counter} from "../src/components/Counter";
import {Usuario} from "../src/components/Usuario";

const Home: NextPage = () => {
  return (
    <div>
        <h1>Hola Mundo!</h1>
        <hr/>
        <Counter/>
        <Usuario/>
    </div>
  )
}

export default Home

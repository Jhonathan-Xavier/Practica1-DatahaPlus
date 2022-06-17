import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from "react";

const Test: NextPage = () => {

    const [number, setNumber] = useState<number|string>(10);
    const changeNumber = () =>{
        setNumber("2");
    }

    return (
        <div>
            <h1>
                {number}
                <button onClick={changeNumber}>click</button>
            </h1>
        </div>
    )
}

export default Test
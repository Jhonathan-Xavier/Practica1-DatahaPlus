import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useRef, useState} from "react";
import List from "../../../components/List";
import Form from "../../../components/Form";
import {Sub} from "../../../interfaces/types";
import {comment} from "postcss";
import {getAllSubs} from "../../../services/getAllSubs"

const INITIAL_STATE = [
    {
        nick: 'Kiridest',
            subMonth: 4,
        description: 'asdfg efdfsd asf'
    },
    {
        nick: 'Gozzilla',
            subMonth: 4,
        description: 'asdfg efdfsd asf'
    }
]

interface AppState {
    subs: Array<Sub>,
    newSubsNumber: number
}

const Subscribers: NextPage = () => {

    //const [subs, setSubs] = useState<Sub[]>([]);
    //const [subs, setSubs] = useState<AppState["subs"]>([]);
    const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
    const divRef = useRef<HTMLDivElement>(null)
    const [subs, setSubs] = useState<AppState["subs"]>([]);

    useEffect(()=>{

        getAllSubs().then(setSubs)
        /*fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(subs => {
                console.log(subs)
                setSubs(subs)
            })

         */
    }, [])

    const handleNewSub = (newSub: Sub): void =>{
        setSubs(subs =>   [...subs,newSub])
        setNewSubsNumber(n => n + 1)
    }

    return (
        <div ref={divRef}>
            <List subs={subs}/>
            <Form onNewSub={handleNewSub}/>
            New Subs: {newSubsNumber}
        </div>
    )
}

export default Subscribers

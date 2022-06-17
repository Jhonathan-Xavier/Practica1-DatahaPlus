import React, {useReducer, useState} from "react";
import {Sub} from "../interfaces/types";
import useNewSubForm from "../hooks/useNewSubForm";

interface FormProps {
    onNewSub: (newSub: Sub) => void
}


const Form = ({onNewSub}:FormProps) =>{
    //const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)
    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        dispatch({
            type: "change-value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })

    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonth} type="number" name="subMonth" placeholder="subMonth" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
                <button type="submit">Guardar</button>
                <button onClick={handleClear}>Limpiar</button>
            </form>
        </div>
    );
}

export default Form;
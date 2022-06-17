import {Sub} from "../interfaces/types";
import {useReducer} from "react";

interface FormState {
    inputValues: Sub
}

const INITIAL_STATE = {
    nick: '',
    subMonth: 0,
    description: ''
}


type FormReducerActions = {
    type: "change-value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}


const formReducer =(state: FormState["inputValues"], action: FormReducerActions) =>{
    switch (action.type){
        case "change-value":
            const  {inputName, inputValue} = action.payload
            return{
                ...state,
                [inputName]: inputValue
            }

        case "clear":
            return INITIAL_STATE
    }
}

const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm;
import {ChangeEvent, useState} from "react";

//2) Creamos el custom Hook
export const useForm = <T extends Object>(initialState: T) => {
    //3) Definimos el useState y la función le damos un estado inicial
    const [formulario, setFormulario] = useState(initialState);

    //4) Creamos nuestra funcion de cambio
    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        //5) Se seleta en el input para que aparezca
        setFormulario({
            ...formulario,
            [name] : value, //La propiedad que está cambiando: su valor
        })
    }

    //6) Exportamos el objeto
    return {
        formulario,
        handleChange,
        ...formulario //podemos también mandar el formulario desestructurado
    }
}
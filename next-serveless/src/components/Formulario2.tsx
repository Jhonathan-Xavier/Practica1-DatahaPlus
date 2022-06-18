import {ChangeEvent, useState} from "react";
import {useForm} from "../hooks/useForm";

//9) Creamos la interfaz
interface FormData {
    email: string,
    username: string
    edad?: number
}

//1) Creamos un formulario
export const Formulario2 = () => {

    //7) traemos el objeto que retornamos de useForm
    //10) Le asignamos al useForm el tipo de dato de la interfaz
    const { username, email, edad, formulario, handleChange} = useForm<FormData>({
        email: '',
        username: ''
    });

    //8) desestructuramos las propiedades
    //const { email, username, edad} = formulario;

    return(
        <div>
            <form autoComplete="off">
                <div>
                    <label>Username:</label>
                    <input onChange={handleChange} type="text" name="username" value={formulario.username}/>
                </div>

                <div>
                    <label>Email:</label>
                    <input onChange={handleChange} type="email" name="email" value={formulario.email}/>
                </div>

                <div>
                    <label>Edad:</label>
                    <input onChange={handleChange} type="number" name="edad" value={edad}/>
                </div>


                {/*Yo no puedo imprimir un objeto directamente en HTML, pero puedo serializarlo:*/}
                <pre>{JSON.stringify(formulario)}</pre>
            </form>
        </div>
    )
}
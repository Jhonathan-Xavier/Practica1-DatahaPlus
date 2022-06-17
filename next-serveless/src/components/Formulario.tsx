import {ChangeEvent, useState} from "react";


//1) Creamos un formulario
export const Formulario = () => {
  const [formulario, setFormulario] = useState({
      email: "",
      nombre: ''
  });

  //2) Creamos nuestra funcion de cambio
    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name] : value
        })
    }


  return(
      <div>
         <form autoComplete="off">
             <div>
                 <label>Nombre:</label>
                 <input onChange={handleChange} type="text" name="nombre"/>
             </div>

             <div>
                 <label>Email:</label>
                 <input type="email" name="email"/>
             </div>

             {/*Yo no puedo imprimir un objeto directamente en HTML, pero puedo serializarlo:*/}
             <pre>{JSON.stringify(formulario)}</pre>
         </form>
      </div>
  )
}
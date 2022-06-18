import {ChangeEvent, useState} from "react";


//1) Creamos un formulario
//export const Formulario = () => {
export const Formulario = () => {
  const [formulario, setFormulario] = useState({
      email: "",
      nombre: ''
  });

  //2) Creamos nuestra funcion de cambio
    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        //3) Se seleta en el input para que aparezca
        setFormulario({
            ...formulario,
            [name] : value, //La propiedad que está cambiando: su valor
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
                 <input onChange={handleChange} type="email" name="email"/>
             </div>

             {/*Yo no puedo imprimir un objeto directamente en HTML, pero puedo serializarlo:*/}
             <pre>{JSON.stringify(formulario)}</pre>
         </form>
      </div>
  )
}
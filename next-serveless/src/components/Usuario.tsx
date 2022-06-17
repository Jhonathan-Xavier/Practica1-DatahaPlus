import {useState} from "react";
import {string} from "prop-types";

interface User {
    uid: string;
    name: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();
  const Login = () => {
    setUser({
        uid:'ABC123',
        name: 'Jhonathan Pizarra'
    });
  }

  return(
      <div>
        <h3>Usuario: useState</h3>
        <button onClick={Login}>Login</button>
        <pre>{JSON.stringify(user)}</pre>
      </div>
  )
}
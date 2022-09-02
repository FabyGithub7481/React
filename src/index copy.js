import React from "react";
import ReactDom from "react-dom/client";
import {Greeting} from './Greeting.js'

// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));

/* function Greeting() {
  const married = true;
  /* if (married) {
    return <h1>Estoy casado</h1>;
  } else {
    return <h1>No estoy casado</h1>;
  } */
//simplificado
/*return <h1>{married ? "Estoy casado 🙄" : "No estoy casado 😀"}</h1>;
} */

/* function Greeting() {
    const user = {
        name: "John",
        email: "john@gmail1.com"
    }
    /* una forma 
    return <h1>{JSON.stringify(user)}</h1> */
// otra forma mejor de mostrar un objeto
/*return <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
    </div>
  } */
//una funcion dentro de otra


//fragment <> antes
/* root.render(
  <div>
    <Greeting />
  </div>
); */

//fragment <> despues
root.render(
  <>
    <Greeting />
  </>
);

import React from "react";
import ReactDom from "react-dom/client";
import { Greeting } from "./Greeting.js";

// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));

//fragment <> despues
root.render(
  <>
    <Greeting title="hola" name="Faby"/>
    <Greeting title="que" lastName="Flores"/>
    <Greeting title="andas" />
    <Greeting title="haciendo" />
  </>
);

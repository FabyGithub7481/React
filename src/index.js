import React from "react";
import ReactDom from "react-dom/client";
import {TaskCard} from "./TaskCard";
import {Button} from './Button'
// COmponentes con clases
import {Saludar} from './Saludar'


// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));

const HandlerChange= (e) => {
  console.log(e.target.id , e.target.value)
}
//fragment <> despues
root.render(
  <>
  <TaskCard ready={true}/>
  <Saludar />
  <Button text="Saludar"/>
  {/* 
  //sin utilizar elementos flech => 
  <input id="inputTemp" onChange={function (e){
    console.log(e.target.id , e.target.value)
  }} /> */}
  
  {/* 
  //utilizando elementos flech => 
  <input id="inputTemp" onChange={(e) => {
    console.log(e.target.id , e.target.value)
  }} /> */}

{/* sacando la funcion aparte */}
  <input id="inputTemp" onChange={HandlerChange
  } />
  <form onSubmit={(e) => {
    e.preventDefault()
    console.log('enviando Datos')}}>
    <h1>Registro de usuario</h1>
    <button>Send</button>
  </form>
  </>
);

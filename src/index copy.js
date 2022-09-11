import React,{useState} from "react";
import ReactDom from "react-dom/client";
import { Post } from "./Post";

// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));
function Counter() {
  const [counter,setCounter]= useState(1)
  return <div>
    <h1>Counter:{counter}</h1>
 <button onClick={()=> {
  setCounter(counter+1)
 }}>
  Sumar
 </button>

 <button onClick={()=> {
  setCounter(counter-1)
 }}>
  Restar
 </button>

 <button onClick={()=>{
  setCounter(1000)
 } } >
  Reiniciar
 </button>
  </div>
}

//fragment <> despues
root.render(
  <>
   <Counter />
  </>
);

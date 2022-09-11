import React,{useState} from "react";
import ReactDom from "react-dom/client";
import { Post } from "./Post";

// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));
function Counter() {
  const [mensaje,setMensaje]= useState('')
  return (
<div>
  {/* <input onChange={e => console.log(e.target.value)}/> */}
  <input onChange={e => setMensaje(e.target.value)}/>
  <button onClick={()=> {
    alert('El mensaje es: '+mensaje)
  }}>
    Save
  </button>
</div>
  );
}

//fragment <> despues
root.render(
  <>
   <Counter />
  </>
);

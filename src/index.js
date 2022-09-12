import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";

// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));
function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("render");
  }, [counter]);

  
  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Save
      </button>

      <hr />
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
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

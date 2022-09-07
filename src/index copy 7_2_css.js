import React from "react";
import ReactDom from "react-dom/client";
import {TaskCard} from "./TaskCard";


// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));

//fragment <> despues
root.render(
  <>
  <TaskCard ready={false}/>
  </>
);

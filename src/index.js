import React from "react";
import ReactDom from "react-dom/client";
import {Post} from './Post'


// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));


//fragment <> despues
root.render(
  <>
  <Post/>
  </>
);

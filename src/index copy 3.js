import React from "react";
import ReactDom from "react-dom/client";
import {Greeting, UserCard} from './Greeting.js'
import Product,{ Navbar} from './Product.js'

// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));


//fragment <> despues
root.render(
  <>
    <Greeting/>
    <UserCard/>
    <Product/>
  </>
);

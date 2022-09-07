import React from "react";
import ReactDom from "react-dom/client";
import {Button} from "./Button";


// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));

//fragment <> despues
root.render(
  <>
  <Button text="Click me"/>
  <Button text="Pay"/>
  <Button text="Send"/>
  {/* <Button text={{text: "Pay"}}/> */}
  {/* <Button text={true}/> */}
  <Button text="" name="Joe"/>

    {/* <UserCard
      name="Faby"
      amount={3000}
      married={true}
      points={[99, 33, 58, 96]}
      address={{ street: "123 main", city: "Barcelona" }}
      greet={function(){
        alert("Hello");
      }}
    />
    <UserCard
      name="Gabo"
      amount={20000}
      married={false}
      points={[52, 96]}
      address={{ street: "158 main", city: "Quito" }}
      
    /> */}
  </>
);

import React from "react";
import ReactDom from "react-dom/client";
import { Post } from "./Post";

// una forma de seleccionar el div root el elemento root
/* const rootElement= document.getElementById('root')
ReactDom.createRoot(rootElement) */
const root = ReactDom.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe",
    email: "joe@gmail.com",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Mau",
    email: "mau@gmail.com",
    image: "https://robohash.org/user3",
  },
];

//fragment <> despues
root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image} alt="" />
        </div>
      );
    })}
  </>
);

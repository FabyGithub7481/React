/* export function Greeting(props) {
  console.log(props)
   return <h1>{props.title}</h1>
  }
 */
// otra forma de usar los props
export function Greeting({ title, name = "user", lastName = "Suarez" }) {
  return (
    <h1>
      {title} {name} {lastName}
    </h1>
  );
}

/* export function UserCard(props) {
  console.log(props);
  return  <div>
    <h1>{props.name}</h1>
    <p>${props.amount}</p>
    <p>{props.married ? 'married': 'Unmarried'}</p>
    <ul>
      <li>City: {props.address.city}</li>
      <li>Street: {props.address.street}</li>
    </ul>
  </div> */

// otra forma de llamar las propiedades por separado

export function UserCard({ name, amount, married, address, greet }) {
  console.log(name,greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "married" : "Unmarried"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Street: {address.street}</li>
      </ul>
    </div>
  );
}

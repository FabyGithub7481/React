/* export function Greeting(props) {
  console.log(props)
   return <h1>{props.title}</h1>
  }
 */
// otra forma de usar los props
  export function Greeting({title,name= "user", lastName="Suarez"}) {
    console.log(title,name, lastName)
     return <h1>{title} {name} {lastName}</h1>
    }
  
 export function UserCard() {
  return <h1>User Card</h1>
}

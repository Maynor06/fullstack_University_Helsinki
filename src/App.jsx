import { useState } from 'react'



const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

function App() {
  const name = "Peter"
  const age = 10
  const friends = [{name: 'Maynor ', age: 10},
   {name: 'David', age: 14}]
  
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name= 'Maya' age={26+10}/>
      <Hello name = {name} age = {age} />
      <p>{friends[0].name}{friends[0].age} </p>
      <p>{friends[1].name}{friends[1].age} </p>
    </div>
  )
}

export default App

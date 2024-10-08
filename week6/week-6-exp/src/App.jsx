import React,{Fragment} from "react";
import {useState} from "react"


function App() {
  const [name,setName] = useState("dj");

  function updateTitle(){
    setName("my name is "+Math.random());
  }
  return (
    <Fragment>
        <button onClick={updateTitle}>Update the title</button>
        <Header title={name}></Header>
        <Header title="dj1"></Header>
     </Fragment>
  )
}
function Header({title}){
  return <div>
    {title}
  </div>
}



export default App

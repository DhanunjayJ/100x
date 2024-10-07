import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div>
        <input style = {{
            padding:10,
            margin:10
        }}
        id="text" placeholder ="title" onChange = {function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />
        <input type = "text" style={{
            padding :10,
            margin :10
        }} id="desc" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />
        <button style={{
            padding :10,
            margin :10
        }} onClick={()=> {fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
                title:title,
                description:description
            }),headers:{
                "cotent-type":"application/json"
            }
        }).then(async function(res){
            const json = await res.json();
            alert("To do Added")
        })}}> Add a todo </button>
    </div>
}
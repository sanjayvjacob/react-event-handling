import React, { useState } from "react";

function App() {

  const [heading, setHeading] = useState("");
  const [isMousedOver, setMousedOver] = useState(false);
  const [name, setName] = useState("")

  function handleClick(){
    setHeading(name);
    setName("");
  }

  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleMouseOver(){
    setMousedOver(true)
  }
  function handleMouseOut(){
    setMousedOver(false)
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?" 
      value={name}
      />
      <button 
      style={{backgroundColor: isMousedOver ? "black":"white"}}
      onClick={handleClick} 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut} 
       >Submit</button>
    </div>
  );
}

export default App;

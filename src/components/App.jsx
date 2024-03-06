import React, { useState } from "react";

function App() {

  const [heading, setHeading] = useState("");
  const [isMousedOver, setMousedOver] = useState(false);
  const [name, setName] = useState("")

  function handleClick(event){
    setHeading(name);
    setName("");
    event.preventDefault(); {/* Prevents the page from refreshing */}
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
      <form onSubmit={handleClick} > {/* Here onClick is replaced with onSubmit */}
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?" 
      value={name}
      />
      <button 
      type="submit" /* Added type as a part of form  */
      style={{backgroundColor: isMousedOver ? "black":"white"}}
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut} 
       >Submit</button>
       </form>
    </div>
  );
}

export default App;

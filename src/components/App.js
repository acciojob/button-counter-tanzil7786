
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  function increment(){
    setCount(count+1)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick = {increment}>Click me</button>
    </div>
  )
}

export default App

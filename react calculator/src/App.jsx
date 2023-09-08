// import React,{ useState } from 'react'
// import './App.css'


// const Calculator = () =>{

//   const[firstNumber,setFirstNumber]=useState("")
//   const[secondNumber,setSecondNumber]=useState("")
//   let [sum,setSum]=useState("")
  
//   const Setadd= () =>{
//   const a= parseInt(firstNumber);
//   const b= parseInt(secondNumber);
//   setSum(a+b);
//   console.log(setSum)
//   }
//   const Setminus = ()=>{


//   }
//   const Settimes = () =>{

//   }
//   const Setdivide = () =>{

//   }


//   const App = () => {
//   return(
//    <div className='Calculator'>
//     <h1>Enter First Number</h1>





//     <button onClick={Calculator}>Calculate</button>
  





  
//    </div>

  

  
//   )}
//   }
// export default App
import React, { useState } from "react";

const App = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [sum, setSum] = useState("");

  const handleAddition = () => {
    const a = parseInt(firstNumber);
    const b = parseInt(secondNumber);
    setSum(a + b);
  };

  return (
    <div className="Addition">
      <h1>Enter First Number</h1>
      <input
        type="number"
        placeholder="First Number"
        onChange={(event) => setFirstNumber(event.target.value)}
      />
      <br />

      <h1>Enter Second Number</h1>
      <input
        type="number"
        placeholder="Second Number"
        onChange={(event) => setSecondNumber(event.target.value)}
      />
      <br />

      <button onClick={handleAddition}>Add</button>
      <h2>Result is: {sum}</h2>
    </div>
  );
};

export default App;

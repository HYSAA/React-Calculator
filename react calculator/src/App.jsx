import React, {useState} from "react";
import './App.css';

const App = () => {
  const [firstNumber, setFirstNumber] = useState(""); 
  const [secondNumber, setSecondNumber] = useState(""); 
  const [sum, setSum] = useState("");
  const [sub, setSub]= useState("");
  const [mul, setMul]=useState("");
  const [divide,setDivide]=useState("")

  const handleAddition = () => {
    const a = parseInt(firstNumber);
    const b = parseInt(secondNumber);
    setSum(a + b);
    setSub("")
    setMul("")
    setDivide("")
   
  };
  const handleSubtraction=()=>{
    const a = parseInt(firstNumber);
    const b = parseInt(secondNumber);
    setSum("");
    setSub(a-b)
    setMul("")
    setDivide("")
   
  }
  const handleMultiplication=()=>{
    const a = parseInt(firstNumber);
    const b = parseInt(secondNumber);
    setSum("")
    setSub("")
    setMul(a*b)
    setDivide("")
   
  }
  const handleDivition=()=>{
    const a = parseInt(firstNumber);
    const b = parseInt(secondNumber);
    setSum("")
    setSub("")
    setMul("")
    setDivide(a/b)
  }


  return (
    <div className="Addition">
      <div className="first">
      <h1>Enter First Number</h1>
      
      <input
        type="number"
        placeholder="First Number"
        value={firstNumber}
        onChange={(event) => setFirstNumber(event.target.value)}
      />
      </div>
      <br />

      <h1>Enter Second Number</h1>
      <input
        type="number"
        placeholder="Second Number"
        value={secondNumber} 
        onChange={(event) => setSecondNumber(event.target.value)}
      />
      <br />

      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <button onClick={handleMultiplication}>Multiply</button>
      <button onClick={handleDivition}>Divide</button>
      <h2>
  {sum && `Result: ${sum}`}
  {sub && `Result: ${sub}`}
  {mul && `Result: ${mul}`}
  {divide && `Result: ${divide}`}
</h2>

<add  handleAddition onset button onClicks
    add useCallback(
      () => {
         firstNumber 
      },
      [second],
      secondNumber
    )
    
    </div>
  );
};

export default App;


import NumButton from "./components/NumButton"
import "./components/App.css"
import { useState } from "react"
import Footer from "./components/Footer"

export default function App() {

  const [calc, setCalc] = useState('')
  const [message, setMessage] = useState("")
  const [style, setStyle] = useState("")


  const handleButtonClick = (number) => {
  
    if (calc === "0") {
      setCalc(number);
    } else {
      setCalc(calc + number);
    }
  }

  const handleOperatorClick = (operator) => {

    const lastCharacter = calc.charAt(calc.length - 1);
    const isValidOperator = /^[+*/-]$/.test(operator);

    if (calc === "Error") {
      setCalc("0" + operator);
    } else if (calc === "") {
      setCalc("");
    } else if (isValidOperator && /^[+*/-]$/.test(lastCharacter)) {
      setCalc(calc.slice(0, -1) + operator);
    } else {
      setCalc(calc + operator);
    }

      
      

  }

  const handleDeleteClick = () => {
    setCalc(calc.slice(0, -1));
  };

  const handleResetClick = () => {
    setCalc('');
    
  };

  const handleEqualClick = () => {
    try {
      if (calc === "") {
        setCalc("")
        setTimeout(() => {setMessage("Type an equation")}, 200)
        setTimeout(() => {setMessage("")}, 1300)

      } else {
        setCalc(eval(calc).toString()) 
      }
      
    }
      
    catch (error) {
      handleResetClick();
      setTimeout(() => {setMessage("Invalid Format Used")}, 200)
      setTimeout(() => {setMessage("")}, 1300)
      
      
    }
  }

  



  return (
    <div className="view">
      <header>
        <h1>Calc</h1>
        <div className={`spacing`}>
          <span>Theme</span>
          <button className={style} onClick={() => setStyle("")}>1</button>
          <button className={style} onClick={() => setStyle("theme2")}>2</button>
          <button className={style} onClick={() => setStyle("theme3")}>3</button>
        </div>
      </header>
      <div className="grid">
        <div className={`output button-sitting radius backcolor ${style}`}>
          <span className="bigfont">
          {calc}
          </span> 
        </div>
        <NumButton value="7" onClick={handleButtonClick} style={style} />
        <NumButton value="8" onClick={handleButtonClick} style={style} />
        <NumButton value="9" onClick={handleButtonClick} style={style} />
        <div className={`flex backcolor radius pointer ${style}`} onClick={handleDeleteClick}>DEL</div>
        <NumButton value="4" onClick={handleButtonClick} style={style} />
        <NumButton value="5" onClick={handleButtonClick} style={style} />
        <NumButton value="6" onClick={handleButtonClick} style={style} />
        <div className={`flex backcolor radius pointer ${style}`} onClick={() => handleOperatorClick("+")}>+</div>
        <NumButton value="1" onClick={handleButtonClick} style={style} />
        <NumButton value="2" onClick={handleButtonClick} style={style} />
        <NumButton value="3" onClick={handleButtonClick} style={style} />
        <div className={`flex backcolor radius pointer ${style}`} onClick={() => handleOperatorClick("-")}>-</div>
        <div className={`flex backcolor radius pointer ${style}`} onClick={() => handleOperatorClick(".")}>.</div>
        <NumButton value="0" onClick={handleButtonClick} style={style} />
        <div className={`flex backcolor radius pointer ${style}`} onClick={() => handleOperatorClick("/")}>/</div>
        <div className={`flex backcolor radius pointer ${style}`} onClick={() => handleOperatorClick("*")}>x</div>
        
        
        
        
        <div className={`reset flex backcolor radius pointer ${style}`} onClick={handleResetClick}>RESET</div>
        <div className={`equal flex backcolor radius pointer ${style}`} onClick={handleEqualClick}>=</div>
        
        
      </div>
      <div className="message">{message}</div>
      <Footer />
      

    </div>

  )
}

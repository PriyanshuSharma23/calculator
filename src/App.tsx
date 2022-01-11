import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import "./App.css";
import ButtonSection from "./buttonSection";

function App() {
  const [current, setCurrent] = useState("0");
  const [prevNum, setPrevNum] = useState<string>("");

  const operate = (a: number, b: number, operation: string) => {
    switch (operation) {
      case "+":
        console.log(operation);
        return a + b;

      case "-":
        return a - b;

      case "*":
        return a * b;

      case "/":
        return a / b;

      case "^":
        return Math.pow(a, b);
      default:
        return a;
    }
  };

  const plus = () => {
    if (!prevNum) {
      setPrevNum(current + " +");
      setCurrent("0");
    } else {
      const operation = prevNum.slice(prevNum.length - 1);
      const a = parseFloat(prevNum.slice(0, prevNum.length - 1));
      const b = parseFloat(current);
      const result = operate(a, b, operation);
      setPrevNum(result + " +");
      setCurrent("0");
    }
  };

  const minus = () => {
    if (!prevNum) {
      setPrevNum(current + " -");
      setCurrent("0");
    } else {
      const operation = prevNum.slice(prevNum.length - 1);
      const a = parseFloat(prevNum.slice(0, prevNum.length - 1));
      const b = parseFloat(current);
      const result = operate(a, b, operation);
      setPrevNum(result + " -");
      setCurrent("0");
    }
  };

  const multiply = () => {
    if (!prevNum) {
      setPrevNum(current + " *");
      setCurrent("0");
    } else {
      const operation = prevNum.slice(prevNum.length - 1);
      const a = parseFloat(prevNum.slice(0, prevNum.length - 1));
      const b = parseFloat(current);
      const result = operate(a, b, operation);
      setPrevNum(result + " *");
      setCurrent("0");
    }
  };

  const divide = () => {
    if (!prevNum) {
      setPrevNum(current + " /");
      setCurrent("0");
    } else {
      const operation = prevNum.slice(prevNum.length - 1);
      const a = parseFloat(prevNum.slice(0, prevNum.length - 1));
      const b = parseFloat(current);
      const result = operate(a, b, operation);
      if (result){ setPrevNum(result + " /")}
      else {alert ("Not a valid operation")}
      setCurrent("0");
    }
  };
  const inputAdd = (num: string) => {
    if (current === "Infinity") {
      if (num !== ".") {
        setCurrent(num);
      } else {
        setCurrent("0.");
      }
    }

    if (num === ".") {
      if (!current.includes(".")) setCurrent((prev) => prev + num);
      return;
    }

    if (current === "0") {
      setCurrent(num);
      return;
    }

    if (num === "3.141592") {
      if (prevNum) {
        const operation = prevNum.slice(prevNum.length - 1);
        const a = parseFloat(prevNum.slice(0, prevNum.length - 1));
        const b = parseFloat(current);
        const result = operate(a, b, operation);
        setPrevNum(result + " *");
        setCurrent(num);
        return;
      } else {
        setPrevNum(current + " *");
        setCurrent(num);
        return;
      }
    }

    setCurrent((prev) => prev + num);
  };

  const clear = () => {
    setCurrent("0");
    setPrevNum("");
  };

  const del = () => {
    if (current !== "") {
      const newString = current.slice(0, current.length - 1);
      if (newString) {
        setCurrent(newString);
        return;
      }
      setCurrent("0");
      return;
    }
  };

  const equals = () => {
    if (prevNum) {
      const operation = prevNum.slice(prevNum.length - 1);
      const a = parseFloat(prevNum);
      const b = parseFloat(current);

      const result = operate(a, b, operation);
      setCurrent(result.toString());
      
      setPrevNum("");
    }
  };

  const copy = () => {
    let div = document.getElementById("current");
    // console.log(div?.innerHTML);
    if (div?.innerHTML) navigator.clipboard.writeText(div?.innerHTML);
  };

  const sqrt = () => {
    setCurrent((prev) => Math.sqrt(parseFloat(prev)).toString());
  };

  const power = () => {
    if (!prevNum) {
      setPrevNum(current + " ^");
      setCurrent("0");
    } else {
      const operation = prevNum.slice(prevNum.length - 1);
      const a = parseFloat(prevNum.slice(0, prevNum.length - 1));
      const b = parseFloat(current);
      const result = operate(a, b, operation);
      setPrevNum(result + " ^");
      setCurrent("0");
    }
  };

  const factorial = () => {
    if (current.includes(".")) alert("Invalid Domain");
    const start = parseInt(current);
    function factorial(num: number): number {
      if (num === 1) return num;
      return num * factorial(num - 1);
    }
    setCurrent(factorial(start).toString());
  };

  return (
    <div className="App md:w-1/3 p-2 mx-auto mt-10 overflow-x-hidden">
      {/* Calculator Screen */}
      <div
        data-previousval
        className="text-right text-gray-700 italic block h-5"
      >
        {prevNum}
      </div>
      <div className="relative text-4xl font-semibold p-2 text-right">
        <button
          className="absolute left-0 top-1 rounded-xl bg-gray-100 border-2 p-1 border-gray-400 text-gray-500 hover:bg-gray-300"
          onClick={copy}
        >
          <FiCopy />
        </button>
        <span id="current">{current}</span>
      </div>

      {/* Button Section */}
      <ButtonSection
        inputAdd={inputAdd}
        clear={clear}
        del={del}
        plus={plus}
        minus={minus}
        divide={divide}
        multiply={multiply}
        equals={equals}
        sqrt={sqrt}
        power={power}
        factorial={factorial}
      />
    </div>
  );
}

export default App;

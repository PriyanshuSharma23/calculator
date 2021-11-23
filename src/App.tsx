import { useState } from "react";
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
      setPrevNum(result + " /");
      setCurrent("0");
    }
  };
  const inputAdd = (num: string) => {
    if (num === ".") {
      if (!current.includes(".")) setCurrent((prev) => prev + num);
      return;
    }

    if (current === "0") {
      setCurrent(num);
      return;
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

  return (
    <div className="App w-1/3 mx-auto mt-10 overflow-x-hidden">
      {/* Calculator Screen */}
      <div data-previousval className="text-right text-gray-700 italic block h-5">
        {prevNum}
      </div>
      <div className="text-4xl font-semibold text-right">{current}</div>

      {/* Button Section */}
      <ButtonSection
        inputAdd={inputAdd}
        clear={clear}
        del={del}
        plus={plus}
        minus={minus}
        divide={divide}
        multiply= {multiply}
        equals = {equals}
      />
    </div>
  );
}

export default App;

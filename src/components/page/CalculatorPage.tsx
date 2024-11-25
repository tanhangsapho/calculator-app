"use client";
import React, { useState } from "react";
import Display from "../ui/Display";
import Button from "../ui/Button";

const CalculatorPage = () => {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);
  function handleNumberButton(num: string) {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  }
  function handleOperatorButton(op: string) {
    const current = parseFloat(display);
    if (firstOperand === null) {
      setFirstOperand(current);
    } else if (operation) {
      const result = calculate(firstOperand, current, operation);
      setFirstOperand(result);
      setDisplay(String(result));
    }
    setOperation(op);
    setNewNumber(true);
  }
  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return b === 0 ? 0 : a / b;
      default:
        return b;
    }
  };
  function handleEquals() {
    const current = parseFloat(display);
    if (firstOperand != null && operation) {
      const result = calculate(firstOperand, current, operation);
      setDisplay(String(result));
      setFirstOperand(null);
      setOperation(null);
      setNewNumber(true);
    }
  }
  function handleClearButton() {
    setDisplay("0");
    setFirstOperand(null);
    setOperation(null);
    setNewNumber(true);
  }
  function handleDecimal() {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setNewNumber(false);
    }
  }
  const ButtonBase =
    "w-full h-16 text-2xl font-bold rounded-lg transition-colors duration-200 flex items-center justify-center";
  const NumberButton = `${ButtonBase} bg-gray-700 hover:bg-gray-600 text-white`;

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <article className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-full max-w-xs">
        <Display value={display} />
        <section className="grid grid-cols-4 gap-2">
          <Button
            className={`${ButtonBase} bg-red-500 hover:bg-red-400 text-white col-span-2`}
            onClick={handleClearButton}
          >
            AC
          </Button>
          <Button
            className={`${ButtonBase} bg-orange-500 hover:bg-orange-400 text-white`}
            onClick={() => handleOperatorButton("÷")}
          >
            ÷
          </Button>
          <Button
            className={`${ButtonBase} bg-orange-500 hover:bg-orange-400 text-white`}
            onClick={() => handleOperatorButton("×")}
          >
            ×
          </Button>
          {[7, 8, 9].map((num) => (
            <Button
              key={num}
              className={NumberButton}
              onClick={() => handleNumberButton(String(num))}
            >
              {num}
            </Button>
          ))}
          <Button
            className={`${ButtonBase} bg-orange-500 hover:bg-orange-400 text-white`}
            onClick={() => handleOperatorButton("-")}
          >
            -
          </Button>
          {[4, 5, 6].map((num) => (
            <Button
              key={num}
              className={NumberButton}
              onClick={() => handleNumberButton(String(num))}
            >
              {num}
            </Button>
          ))}
          <Button
            className={`${ButtonBase} bg-orange-500 hover:bg-orange-400 text-white`}
            onClick={() => handleOperatorButton("+")}
          >
            +
          </Button>
          {[1, 2, 3].map((num) => (
            <Button
              key={num}
              className={NumberButton}
              onClick={() => handleNumberButton(String(num))}
            >
              {num}
            </Button>
          ))}
          <Button
            className={`${ButtonBase} bg-orange-500 hover:bg-orange-400 text-white`}
            onClick={handleEquals}
          >
            =
          </Button>

          <Button
            className={`${NumberButton}`}
            onClick={() => handleNumberButton("0")}
            span={2}
          >
            0
          </Button>
          <Button className={NumberButton} onClick={handleDecimal}>
            .
          </Button>
        </section>
      </article>
    </main>
  );
};

export default CalculatorPage;

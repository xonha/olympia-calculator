"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <main className="flex flex-col items-center m-auto rounded-lg border border-gray-300 max-w-lg min-w-80">
      <div className="p-6 rounded-lg flex flex-col gap-4">
        <div className="border rounded-lg border-gray-300 p-2">
          <input
            type="text"
            className="w-full mb-2 text-2xl focus:outline-none text-right text-gray-600"
            value={expression}
            readOnly
          />
          <input
            type="text"
            className="w-full text-4xl focus:outline-none text-right"
            value={result}
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="text-xl bg-gray-300 hover:bg-gray-400 p-2 rounded-lg"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

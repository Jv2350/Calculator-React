import { useState } from "react";
import Button from "./Button";

const safeEvaluate = (expression) => {
  try {
    if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
      return "Error";
    }
    const result = new Function(`return ${expression}`)();
    return isFinite(result) ? result.toString() : "Error";
  } catch {
    return "Error";
  }
};

export default function Calculator() {
  const [input, setInput] = useState("");

  const operators = ["+", "-", "*", "/"];

  const handleClick = (value) => {
    if (value === "=") {
      setInput((prev) => safeEvaluate(prev));
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => {
        if (operators.includes(value)) {
          if (operators.includes(prev.slice(-1))) {
            return prev.slice(0, -1) + value;
          }
          if (prev === "") return "";
        }
        return prev + value;
      });
    }
  };

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

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-gray-50 rounded-2xl shadow-2xl">
      <div className="mb-5 p-4 bg-white rounded-xl text-right text-2xl shadow-inner min-h-[3rem] break-words">
        {input || "0"}
      </div>

      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn) => (
          <Button
            key={btn}
            label={btn}
            onClick={() => handleClick(btn)}
            className={
              btn === "C" ? "col-span-4 bg-red-400 hover:bg-red-500" : ""
            }
          />
        ))}
      </div>
    </div>
  );
}

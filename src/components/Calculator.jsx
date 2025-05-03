import { useState } from "react";
import Button from "./Button";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="max-w-sm mx-auto mt-10 p-5 bg-gray-50 rounded-2xl shadow-2xl">
      <div className="mb-4 p-4 bg-white rounded-xl text-right text-2xl shadow-inner min-h-[3rem]">
        {input || "0"}
      </div>

      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn) => (
          <Button key={btn} label={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
}

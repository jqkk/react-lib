import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div
      className="bg-gray-200 text-gray-700 text-2xl font-bold rounded-xl border-2 border-gray-500 p-10 cursor-pointer select-none"
      onClick={handleClick}
    >
      Counting : {count}
    </div>
  );
};

export default Button;

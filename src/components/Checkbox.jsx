import { useState } from "react";

const Checkbox = ({ label }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div
      className="flex gap-2 items-start"
      onClick={() => setIsCompleted(true)}
    >
      <div
        className={`${
          isCompleted
            ? "bg-lime-green border-lime-green line-through"
            : "bg-white border-gray-400 hover:bg-gray-200"
        } w-4 h-4 mt-[0.4rem] border-2  rounded-full cursor-pointer  transition-all`}
      ></div>
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;

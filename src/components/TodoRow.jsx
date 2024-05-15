import { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

const TodoRow = ({ todo, id, todos, setTodos }) => {
  const [isHoverd, setIsHovered] = useState(false);

  const handleDelete = (TodoId) => {
    const updatedTodos = todos.filter((item, i) => {
      if (i !== TodoId) return item;
    });
    setTodos(updatedTodos);
  };

  return (
    <div
      className="flex gap-2 text-lg items-center justify-between my-4 min-h-[36px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Checkbox label={todo} />

      {isHoverd && (
        <Button size="small" label="X" handleClick={() => handleDelete(id)} />
      )}
    </div>
  );
};

export default TodoRow;

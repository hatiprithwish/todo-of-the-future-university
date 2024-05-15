import { useRef, useState } from "react";
import Button from "./components/Button";
import TodoRow from "./components/TodoRow";

function App() {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  const handleAddClick = () => {
    let inputText = inputRef.current.value;

    if (inputText.length > 0) {
      setTodos([...todos, inputText]);
      inputRef.current.value = "";
    } else {
      alert("Todos can't be empty!");
    }
  };

  return (
    <main className="w-screen min-h-screen overflow-x-hidden bg-wheat text-lg">
      <section className="my-8 w-[500px] mx-auto bg-white rounded-custom">
        <div className="p-8">
          <h1 className="text-3xl font-semibold mb-6">Todo</h1>
          {todos.length > 0 ? (
            todos.map((todo, i) => (
              <TodoRow
                key={i}
                todo={todo}
                id={i}
                todos={todos}
                setTodos={setTodos}
              />
            ))
          ) : (
            <p className="text-center text-red-500">Add some todo first!!</p>
          )}
        </div>

        <div className="w-full flex text-lg gap-2 border-t-2 border-gray1 py-4 px-4">
          <input
            type="text"
            placeholder="Add task here..."
            className="rounded-custom bg-gray1 p-4 flex-1"
            ref={inputRef}
          />
          <Button label="Add" size="big" handleClick={handleAddClick} />
        </div>
      </section>
    </main>
  );
}

export default App;

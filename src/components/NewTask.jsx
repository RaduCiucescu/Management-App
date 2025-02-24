import { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
      />
      {enteredTask.length === 0 && (
        <button
          className="text-stone-700 hover:text-stone-950"
          disabled
          onClick={handleClick}
        >
          Add Task
        </button>
      )}
      {enteredTask.length > 0 && (
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      )}
    </div>
  );
};

export default NewTask;

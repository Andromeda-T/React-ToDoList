import { useState } from "react";
import "./App.css";

// const ToDoWork = [
//   { work: "Do1", finish: false },
//   { work: "Do2", finish: false },
//   { work: "Do3", finish: false },
//   { work: "Do3", finish: false },
// ];

function App() {
  return <ToDo />;
}

function ToDo() {
  const [task, setTask] = useState([]);

  function taskHandle(data) {
    setTask((datas) => [...datas, data]);
    console.log(data);
  }

  return (
    <div className="ToDoList sm:p-5 md:p-0">
      <div className="relative">
        <img
          src="./bg.jpg"
          alt="saw"
          className="image w-[100%] sm:hidden md:block"
        ></img>
      </div>
      <div className="max-w-[420px] m-auto flex relative lg:bottom-[15rem] flex-col">
        <span className="text-white font-semibold text-4xl tracking-[.5rem]">
          TO-DO
        </span>
        <AddTask onSetTask={setTask} taskHandle={taskHandle} />
        <Tasks task={task} />
        <Control />
      </div>
    </div>
  );
}

function AddTask({ taskHandle }) {
  const [Data, setData] = useState("");

  function setSubmit(e) {
    e.preventDefault();
    if (!Data) return;
    setData("");
    taskHandle({ Data: Data, finish: false });
  }

  return (
    <form className="my-6 relative" onSubmit={(e) => setSubmit(e)}>
      <input
        type="checkbox"
        className="absolute left-5 top-1/2 -translate-y-1/2 scale-150"
        disabled
      />
      <input
        className="w-full p-3 rounded-md pl-14"
        placeholder="Create a new to-do..."
        value={Data}
        onChange={(e) => setData(e.target.value)}
      />
      <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-gray-300 p-1 rounded-md">
        Add Task
      </button>
    </form>
  );
}

function Tasks({ task }) {
  return task.map((work) => <EachTasks Task={work} />);
}
function EachTasks({ Task }) {
  const [isFinish , setIsFinish] = useState(Task.finish)

  return (
    <div className="bg-white shadow-lg">
      <div className="relative border-b-[1px] border-gray-300">
        <input
          type="checkbox"
          className="absolute left-5 top-1/2 -translate-y-1/2 scale-150"
          onClick={() => setIsFinish(!isFinish)}
        />
        <li
          className={`w-full p-3 rounded-t-md pl-14 list-none text-[1rem] ${isFinish ? "text-gray-300 line-through" : ""}`}
        >
          {Task.Data}
        </li>
      </div>
    </div>
  );
}

function Control() {
  return (
    <div className="relative flex justify-between text-[.75rem] bg-white shadow-md p-2 text-gray-500">
      <div>
        <span>5 tasks left</span>
      </div>
      <div className="space-x-2">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <div>
        <span>Clear Completed</span>
      </div>
    </div>
  );
}

export default App;

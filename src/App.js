import { useState } from "react";
import "./App.css";

function App() {
  return <ToDo />;
}

function ToDo() {
  const [task, setTask] = useState([]);
  const [Data, setData] = useState("");
  const [active, setActive] = useState("All");

  function taskHandle(data) {
    const newData = {
      Data: data,
      finish: false,
      id: Date.now(),
    };
    setTask((datas) => [...datas, newData]);
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
        <AddTask
          onSetTask={setTask}
          taskHandle={taskHandle}
          Data={Data}
          setData={setData}
        />
        <Tasks task={task} setTask={setTask} active={active} />
        <Control
          Task={task}
          setActive={setActive}
          setTask={setTask}
          active={active}
        />
      </div>
    </div>
  );
}

function AddTask({ taskHandle, Data, setData }) {
  function setSubmit(e) {
    e.preventDefault();
    if (!Data) return;
    setData("");
    taskHandle(Data);
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

function Tasks({ task, setTask, active }) {
  let filteredTasks;
  if (active === "All") filteredTasks = task;
  if (active === "Active")
    filteredTasks = task.filter((item) => item.finish === false);
  if (active === "Completed")
    filteredTasks = task.filter((item) => item.finish);

  return filteredTasks.map((work) => (
    <EachTasks Task={work} setTask={setTask} key={work.id} />
  ));
}

function EachTasks({ Task, setTask }) {

  function Delete() {
    setTask((Tasks) => Tasks.filter((task) => task.id !== Task.id));
  }

  function toggleFinish() {
    setTask((tasks) =>
      tasks.map((item) =>
        item.id === Task.id ? { ...item, finish: !item.finish } : item
      )
    );
  }

  return (
    <div className="bg-white shadow-lg group">
      <div className="flex justify-between border-b-[1px]">
        <div className="relative border-gray-300 w-full">
          <input
            type="checkbox"
            className="absolute left-5 top-1/2 -translate-y-1/2 scale-150"
            onClick={toggleFinish}
            checked={Task.finish}
          />
          <li
            className={`w-full p-3 rounded-t-md pl-14 list-none text-[1rem] ${
              Task.finish ? "text-gray-300 line-through" : ""
            }`}
          >
            {Task.Data}
          </li>
        </div>
        <div className="mr-4 hidden group-hover:flex">
          <button onClick={Delete}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                fill="#494C6B"
                fillRule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function Control({ Task, setActive, setTask, active }) {
  const me = Task.filter((task) => task.finish === false).length;

  function clear() {
    setTask(Task.filter((item) => item.finish === false));
  }

  return (
    <div className="relative flex justify-between text-[.8rem] bg-white shadow-md p-2 text-gray-400 font-bold">
      <div>
        <span>{me} tasks left</span>
      </div>
      <div className="space-x-2">
        <button
          className={`cursor-pointer hover:text-gray-800 ${
            active === "All"
              ? "text-blue-600 underline underline-offset-4 hover:text-blue-600"
              : ""
          }`}
          onClick={() => setActive("All")}
        >
          All
        </button>
        <button
          className={`cursor-pointer hover:text-gray-800 ${
            active === "Active"
              ? "text-blue-600 underline underline-offset-4 hover:text-blue-600"
              : ""
          }`}
          value="Active"
          onClick={() => setActive("Active")}
        >
          Active
        </button>
        <button
          className={`cursor-pointer hover:text-gray-800 ${
            active === "Completed"
              ? "text-blue-600 underline underline-offset-4 hover:text-blue-600"
              : ""
          }`}
          value="Completed"
          onClick={() => setActive("Completed")}
        >
          Completed
        </button>
      </div>
      <div>
        <button className="hover:text-gray-800" value="Clear" onClick={clear}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <div>
      <Head />
    </div>
  );
}

function Head() {
  return (
    <>
      <div className="relative">
        <img src="./bg.jpg" alt="saw" className="w-[100%]"></img>
      </div>
      <div className="max-w-[420px] m-auto flex relative bottom-[15rem] flex-col">
        <span className="text-white font-semibold text-4xl tracking-[.5rem]">
          TO-DO
        </span>
        <div className="my-6 relative">
          <input
            type="checkbox"
            className="absolute left-5 top-1/2 -translate-y-1/2 scale-150"
            disabled
          />
          <input
            className="w-full p-3 rounded-md pl-14"
            placeholder="Create a new to-do..."
          />
          <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-gray-300 p-1 rounded-md">
            Add Task
          </button>
        </div>
        <div className="shadow-md">
          <div className="relative border-b-2">
            <input
              type="checkbox"
              className="absolute left-5 top-1/2 -translate-y-1/2 scale-150"
            />

            <input
              className="w-full p-3 rounded-t-md pl-14"
              placeholder="Create a new to-do..."
            ></input>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              className="absolute left-5 top-1/2 -translate-y-1/2 scale-150"
            />

            <input
              className="w-full p-3 pl-14"
              placeholder="Create a new to-do..."
            ></input>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              className="absolute left-5 top-1/2 -translate-y-1/2 scale-150"
            />

            <input
              className="w-full p-3 pl-14"
              placeholder="Create a new to-do..."
            ></input>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              className="absolute left-5 top-1/2 -translate-y-1/2 scale-150"
            />

            <input
              className="w-full p-3 pl-14"
              placeholder="Create a new to-do..."
            ></input>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default App;

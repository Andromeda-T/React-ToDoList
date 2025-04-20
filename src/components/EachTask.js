export default function EachTasks({ Task, setTask }) {
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

    function togglePin(id) {
        setTask((tasks) =>
            tasks.map((task) =>
                task.id === id ? { ...task, pin: !task.pin } : task
            )
        );
    }

    return (
        <div
            className={`shadow-lg group ${
                Task.pin ? "bg-gray-400" : "bg-white"
            }`}
        >
            <div className="flex justify-between border-b-[1px]">
                <div className="relative border-gray-300 w-full">
                    <input
                        type="checkbox"
                        className="absolute left-5 top-1/2 -translate-y-1/2 scale-150"
                        onChange={toggleFinish}
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
                <div className={`mr-4 ${Task.pin ? "flex" : "hidden"} group-hover:flex flex-row-reverse`}>
                    <button onClick={Delete}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                        >
                            <path
                                fill="#494C6B"
                                fillRule="evenodd"
                                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                            />
                        </svg>
                    </button>
                    <button onClick={() => togglePin(Task.id)}>
                        <img
                            className={`mr-5 opacity-50 hover:opacity-100 ${
                                Task.pin ? "opacity-100" : "opacity-50"
                            }`}
                            src="./pin.png"
                            alt="s"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

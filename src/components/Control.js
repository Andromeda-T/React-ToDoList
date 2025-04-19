export default function Control({ Task, setActive, setTask, active }) {
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
                <button
                    className="hover:text-gray-800"
                    value="Clear"
                    onClick={clear}
                >
                    Clear Completed
                </button>
            </div>
        </div>
    );
}

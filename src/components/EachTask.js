import { useState } from "react";

export default function EachTasks({
    Task: { id, Data, finish, pin },
    setTask
}) {
    const [newVal, setNewVal] = useState(Data);
    const [edit, setEdit] = useState(false);

    function toggleEdit(e) {
        e.preventDefault();
        setTask((Tasks) =>
            Tasks.map((task) =>
                task.id === id ? { ...task, Data: newVal } : task
            )
        );
        setEdit(false);
    }

    function Delete() {
        setTask((Tasks) => Tasks.filter((task) => task.id !== id));
    }

    function toggleFinish() {
        setTask((tasks) =>
            tasks.map((item) =>
                item.id === id ? { ...item, finish: !item.finish } : item
            )
        );
    }

    function togglePin() {
        setTask((tasks) =>
            tasks.map((task) =>
                task.id === id ? { ...task, pin: !task.pin } : task
            )
        );
    }

    return (
        <div
            className={`shadow-lg group ${
                pin
                    ? "bg-gray-400 dark:bg-slate-200"
                    : "bg-white dark:bg-[#25273c]"
            } dark:bg-[#25273c] dark:text-white`}
        >
            <div className="flex justify-between border-b-[1px]">
                <div className="relative border-gray-300 w-full">
                    <input
                        type="checkbox"
                        className="absolute left-5 top-1/2 -translate-y-1/2 scale-150 "
                        onChange={toggleFinish}
                        checked={finish}
                    />
                    <li
                        className={`w-full p-3 pl-14 list-none text-[1rem] dark:text-white ${
                            finish ? "text-gray-300 line-through" : ""
                        } ${pin ? "dark:text-black" : ""}`}
                    >
                        {Data}
                    </li>
                </div>
                <div
                    className={`mr-4 ${
                        pin ? "flex" : "hidden"
                    } group-hover:flex flex-row-reverse`}
                >
                    <button
                        className="opacity-50 hover:opacity-100 "
                        onClick={Delete}
                    >
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
                    <button onClick={() => togglePin()}>
                        <img
                            className={`mr-5 opacity-50 hover:opacity-100 ${
                                pin ? "opacity-100" : "opacity-50"
                            }`}
                            src="./icon/pin.png"
                            alt="s"
                            width={20}
                            height={20}
                        />
                    </button>
                    <button className="relative">
                        <img
                            className={`mr-5 opacity-50 hover:opacity-100 text-white`}
                            src="./icon/edit.svg"
                            alt="edit"
                            width={20}
                            height={20}
                            onClick={() => setEdit(!edit)}
                        />
                        <form onSubmit={(e) => toggleEdit(e)}>
                            <input
                                value={newVal}
                                onChange={(e) => setNewVal(e.target.value)}
                                placeholder="Enter new value..."
                                className={`absolute bg-gray-300 z-20 right-10 top-[.4rem] p-[.4rem] rounded-lg dark:bg-white dark:text-black ${
                                    edit ? "block" : "hidden"
                                }`}
                            ></input>
                        </form>
                    </button>
                </div>
            </div>
        </div>
    );
}

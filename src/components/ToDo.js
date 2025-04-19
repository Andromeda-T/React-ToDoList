import { useState } from "react"
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import Control from "./Control";

export default function ToDo() {
    const [task, setTask] = useState([]);
    const [Data, setData] = useState("");
    const [active, setActive] = useState("All");

    function taskHandle(data) {
        const newData = {
            Data: data,
            finish: false,
            id: Date.now()
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
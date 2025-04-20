import { useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import Control from "./Control";
import Search from "./Search";

export default function App() {
    const [task, setTask] = useState([]);
    const [Data, setData] = useState("");
    const [active, setActive] = useState("All");
    const [search, setSearch] = useState("");

    function taskHandle(data) {
        const newData = {
            Data: data,
            finish: false,
            id: Date.now(),
            pin : false
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
            <div className="max-w-[550px] m-auto flex lg:bottom-[15rem] flex-col relative">
                <Search search={search} setSearch={setSearch} />
                <AddTask
                    onSetTask={setTask}
                    taskHandle={taskHandle}
                    Data={Data}
                    setData={setData}
                />
                <Tasks
                    task={task}
                    setTask={setTask}
                    active={active}
                    search={search}
                />
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

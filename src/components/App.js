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
    const [mode, setMode] = useState(false);

    function taskHandle(data) {
        const newData = {
            Data: data,
            finish: false,
            id: Date.now(),
            pin: false
        };
        setTask((datas) => [...datas, newData]);
        console.log(data);
    }

    return (
        <div className="ToDoList h-[100vh] sm:p-5 md:p-0 dark:bg-[#161722]">
            <div className="relative">
                <img
                    src={mode ? "./img/bg2.jpg" : "./img/bg.jpg"}
                    alt="saw"
                    className="image w-[100%] sm:hidden md:block"
                ></img>
            </div>
            <div className="max-w-[450px] m-auto flex lg:bottom-[15rem] flex-col relative">
                <Search search={search} setSearch={setSearch} />
                <AddTask
                    onSetTask={setTask}
                    taskHandle={taskHandle}
                    Data={Data}
                    setData={setData}
                    mode={mode}
                    setMode={setMode}
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

export default function AddTask({ taskHandle, Data, setData, mode, setMode }) {
    if (mode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    function setSubmit(e) {
        e.preventDefault();
        if (!Data) return;
        setData("");
        taskHandle(Data);
    }

    return (
        <form className="my-6 relative" onSubmit={(e) => setSubmit(e)}>
            <img
                onClick={() => setMode(!mode)}
                src={mode ? "./icon/dark.png" : "./icon/light.png"}
                alt="light"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 dark:text-white"
            />
            <input
                className="w-full p-3 rounded-md pl-14 dark:bg-[#25273c] dark:text-white"
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

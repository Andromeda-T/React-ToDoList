export default function AddTask({ taskHandle, Data, setData }) {
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
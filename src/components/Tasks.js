import EachTasks from "./EachTask";

export default function Tasks({ task, setTask, active, search }) {
    let filteredTasks = task;

    if (search !== "") {
        filteredTasks = filteredTasks.filter((task) =>
            task.Data.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (active === "Active") {
        filteredTasks = filteredTasks.filter((task) => task.finish === false);
    }
    if (active === "Completed") {
        filteredTasks = filteredTasks.filter((task) => task.finish === true);
    }

    const FilterPined = filteredTasks.sort((a , b) => b.pin - a.pin)

    return FilterPined.map((work) => (
        <EachTasks Task={work} setTask={setTask} key={work.id}/>
    ));
}

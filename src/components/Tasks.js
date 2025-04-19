import EachTasks from "./EachTask";

export default function Tasks({ task, setTask, active }) {
    let filteredTasks;
    if (active === "All") filteredTasks = task;
    if (active === "Active")
        filteredTasks = task.filter((item) => item.finish === false);
    if (active === "Completed")
        filteredTasks = task.filter((item) => item.finish);

    return filteredTasks.map((work) => (
        <EachTasks Task={work} setTask={setTask} key={work.id} />
    ));
}

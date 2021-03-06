import TaskData from "./TaskData";
import Task from "./Task";
import ListTask from "./ListTask";

const listTask = new ListTask();
TaskData.forEach(task => {
  let newTask = new Task(...Object.values(task));
  listTask.addTask(newTask);
});

export default listTask;
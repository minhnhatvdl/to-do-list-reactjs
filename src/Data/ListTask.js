export default class ListTask {
    constructor() {
        this.listTask = []
    }
    // add a new task
    addTask(task) {
        this.listTask = [...this.listTask, task];
    }
    // find task by id
    findTaskById(id) {
        return this.addTask.filter(task => task.id === id)[0]
    }
}
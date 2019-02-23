import * as types from '../Constants/actionType';
// list all tasks
export const listAllTask = () => {
    return {
        type: types.LIST_ALL_TASK
    }
}
// init all tasks from local storage
export const initAllTask = () => {
    return {
        type: types.INIT_ALL_TASK
    }
}
// add a new task
export const addNewTask = newTask => {
    return {
        type: types.ADD_NEW_TASK,
        newTask
    }
}
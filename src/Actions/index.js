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
// edit a task
export const editTask = taskEditing => {
    return {
        type: types.EDIT_TASK,
        taskEditing
    }
}
// update a task
export const updateTask = taskUpdating => {
    return {
        type: types.UPDATE_TASK,
        taskUpdating
    }
}
// convert state isAddTask to true
export const convertIsAddTaskToTrue = () => {
    return {
        type: types.CONVERT_IS_ADD_TASK_TO_TRUE
    }
}
// convert state isAddTask to false
export const convertIsAddTaskToFalse = () => {
    return {
        type: types.CONVERT_IS_ADD_TASK_TO_FALSE
    }
}
// clear a form
export const clearForm = () => {
    return {
        type: types.CLEAR_FORM
    }
}
// change status of task
export const changeStatusTask = taskUpdating => {
    return {
        type: types.CHANGE_STATUS_TASK,
        taskUpdating
    }
}
// filter tasks
export const filterTask = (filterType, filterValue) => {
    return {
        type: types.FILTER_TASK,
        filterType,
        filterValue
    }
}
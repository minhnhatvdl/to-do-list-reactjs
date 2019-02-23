import * as types from '../Constants/actionType';

export const listAllTask = () => {
    return {
        type: types.LIST_ALL_TASK
    }
}

export const initAllTask = () => {
    return {
        type: types.INIT_ALL_TASK
    }
}
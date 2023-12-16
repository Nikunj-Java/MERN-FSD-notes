

export const ADD_TASK='ADD_TASK';
export const REMOVE_TASK='REMOVE_TASK';
export const TOGGLE_TASK='TOGGLE_TASK';

export const addTask= (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const removeTask=(index)=>({
    type: REMOVE_TASK,
    payload: index,
});

export const toggleTask=(index)=>({
    type: TOGGLE_TASK,
    payload: index,
});
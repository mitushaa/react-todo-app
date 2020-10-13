export function getTask() {
    return dispatch => {
        return dispatch({
            type: 'GET_TASK'
        });
    }
};

export function addTask(data) {
    return dispatch => {
        return dispatch({
            type: 'ADD_TASK',
            payload: data
        });
    }
};

export function editTask(data) {
    return dispatch => {
        return dispatch({
            type: 'EDIT_TASK',
            payload: data
        });
    }
};

export function deleteTask(taskId) {
    return dispatch => {
        return dispatch({
            type: 'DELETE_TASK',
            payload: taskId
        });
    }
};

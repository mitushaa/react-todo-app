const initialstate = {
    tasks: [
        { id: 1, taskName: "Sleep", taskLabel: "High Priority" }

    ]
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'GET_TASK':
            return {
                ...state
            };
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(
                    (content, i) => content.id === action.payload.id ? {...content, taskName : action.payload.taskName ,  taskLabel : action.payload.taskLabel }
                                            : content)
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;

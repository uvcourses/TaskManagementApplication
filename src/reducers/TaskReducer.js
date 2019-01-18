const taskDefaultState = [];

export default (state = taskDefaultState, action) => {
 
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                action.Tasks
            ];
        case 'REMOVE_TASK':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_TASK':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};
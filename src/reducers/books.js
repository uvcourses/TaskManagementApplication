const booksReducerDefaultState = [];

export default (state = booksReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                action.book
            ];
        case 'REMOVE_BOOK':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};
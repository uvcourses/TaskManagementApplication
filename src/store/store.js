import { createStore, combineReducers } from "redux";
import TaskReducer from '../reducers/TaskReducer';
import filtersReducer from '../reducers/filters';
import { composeWithDevTools } from "redux-devtools-extension";
const demoState = {
    Tasks: [
        {
            id: '123abcdefghiklmn',
            taskName: 'Origin',
            taskCategory: 'Origin thrusts Robert Langdon into the dangerous intersection of humankind’s two most enduring questions.',
            taskTargetDate: 'Dan Brown'
        }
    ],
    filters: {
        text: 'ori',
        sortBy: 'published', // published or title
        startYear: undefined,
        endYear: undefined
    },
    loginDetails : {
        userName :'Yuvaraj',
        isUserAuthenticated:true
    }
};

export default () => {
    return createStore(
        combineReducers({
            Tasks: TaskReducer,
            filters: filtersReducer
        }
    ),composeWithDevTools());
};
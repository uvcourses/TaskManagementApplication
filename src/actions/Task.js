import uuid from 'uuid';

export const addTask = ({
    taskName = '',
    taskCategory = '',
    taskTargetDate = ''
} = {}) => ({
    
    type: 'ADD_TASK',
    Tasks: {
        id: uuid(),
        taskName,
        taskCategory,
        taskTargetDate
    }

    
});



export const removeTask = ({ id } = {}) => ({
    type: 'REMOVE_TASK',
    id
});
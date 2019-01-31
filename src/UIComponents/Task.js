import React from 'react';
import ReactDom from 'react-dom'; 

const Task = (props) =>{ 
return(
    <tr><td>{props.taskName}</td><td>{props.taskCategory}</td><td>{props.taskComments}</td><td>{props.taskTarget}</td></tr>
);
}


export default Task;
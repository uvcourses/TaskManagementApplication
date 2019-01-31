import React from 'react';
import AddTaskDetails from '../UIComponents/AddTaskDetails';
import {addTask}from '../actions/Task';
import { connect } from 'react-redux';
const AddTask = (props) => (
    <div> 
       <h5><AddTaskDetails onSubmitTask={(task) => {
           props.dispatch(addTask(task));
        } }/></h5>
    </div>
);

export default connect()(AddTask);
import React from 'react';
import ReactDOM from 'react-dom'; 

class AddTaskDetails extends React.Component {
    constructor(props){
        super(props);
        this.onTaskNameChange = this.onTaskNameChange.bind(this);
        this.onTaskCategoryChange = this.onTaskCategoryChange.bind(this);
        this.onTaskTargetChange = this.onTaskTargetChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state ={
            taskName : '',
            taskCategory :'',
            taskTargetDate: '',
            taskComments :''
        };
    }

    onTaskNameChange(e) {
        const task = e.target.value;
        this.setState(() => ({ taskName: task }));
    }
    onTaskCategoryChange(e) {
        const taskCategory = e.target.value;
        this.setState(() => ({ taskCategory: taskCategory }));
    }
    onTaskTargetChange(e) {
        const taskTargetDate = e.target.value;
        this.setState(() => ({ taskTargetDate: taskTargetDate }));
    }
    onSubmit(e) {
        e.preventDefault();

        this.props.onSubmitTask(
            {
                taskName: this.state.taskName,
                taskCategory: this.state.taskCategory,
                taskTargetDate: this.state.taskTargetDate
            }
        );

    }
render() {
    return (
        <div className="container col-lg-6 ffset-s3 valign align-items-center">
        <div className="card">
            <h5 className="card-header info-color white-text text-center py-4">
                <strong>Add Task</strong>
            </h5>
            <div className="form-group m-2 ">
                <div className="form-group">
                    <input type="text" className="form-control" value={this.state.taskName} onChange={this.onTaskNameChange} placeholder="Enter Task Name"></input>
                </div>
                <div className="form-group">
                    <input type="date" className="form-control" value={this.state.taskTargetDate} onChange={this.onTaskTargetChange} placeholder="Enter Task Target Date" max="3000-12-31" min="1000-01-01"/>
                </div>
                <div className="form-group"> 
                    <select className="form-control" placeholder="Enter Task Category" value={this.state.taskCategory} onChange={this.onTaskCategoryChange}>
                    <option>Select Category</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="3" value={this.state.taskComments} > </textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary mb-2" onClick={this.onSubmit}>Add Task</button>
                </div>
            </div>
        </div>
    </div>
    );
}


}

export default AddTaskDetails;
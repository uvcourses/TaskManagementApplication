import React from 'react';
import ReactDOM from 'react-dom'; 

class AddTaskDetails extends React.Component {
    constructor(props){
        super(props);
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
                    <input type="text" className="form-control" placeholder="Enter Task Name"  name={this.state.taskName} onChange={this.handleChange}></input>
                </div>
                <div className="form-group">
                    <input type="date" className="form-control" placeholder="Enter Task Target Date" max="3000-12-31" min="1000-01-01" onChange={this.handleChange} name={this.state.targetDate}/>
                </div>
                <div className="form-group">
                    <select className="form-control" placeholder="Enter Task Category" name={this.state.taskCategory} onChange={this.handleChange}>
                    <option>Select Category</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="3" value={this.state.taskSummary} onChange={this.handleChange}> </textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary mb-2" >Add Task</button>
                </div>
            </div>
        </div>
    </div>
    );
}


}

export default AddTaskDetails;
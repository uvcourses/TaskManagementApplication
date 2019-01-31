import React from 'react';
import axios from 'axios'; 

class TaskInboxDetails extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {taskList: [] ,
            sequenceNumber : 0
        };
    }
    componentDidMount(){
                  axios.get('http://localhost:8102/Pomodora/taskInbox')
                  .then(response => {
                      const taskList =response.data;
                    this.setState({ taskList });
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
    }

    render() {
        return (
            <div className="container col-lg-6 ffset-s3 valign align-items-center">
                <div className="card">
                    <h5 className="card-header info-color white-text text-center py-2">
                        <strong>Task Inbox</strong>
                    </h5>

                    <div className="form-group">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Task Name</th>
                                    <th scope="col">Task Category</th>
                                    <th scope="col">Task Target Date</th>
                                    <th scope="col">Task comments</th>
                                </tr>
                            </thead>
                            <tbody>  
                                { this.state.taskList.map((tasks,index)=> {
                                    return (  
                                    <tr key={index}><td>{index+1}</td><td>{tasks.taskName}</td><td>{tasks.taskCategory}</td>
                                    <td>{tasks.taskTarget}</td><td>{tasks.taskComments}</td></tr>
                                    ); 
                                })
                                    
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}
export default TaskInboxDetails;
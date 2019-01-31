import React from 'react';
import ReactDOM from 'react-dom';


class Test extends React.Component {
    constructor(props)
    {
        super(props);
        this.state ={
            taskName : ''
        }
    } 
    componentDidMount() {
        this.setState({taskName : 'Reading '})
    }
    iterateTasks() { 
       
            return (
                  <div>  Testing </div>
            );
    }
    render() {
        return(
            <div> this is my task {this.state.taskName}</div>
        );
    }

}

ReactDOM.render(<Test/>, document.getElementById('app'));
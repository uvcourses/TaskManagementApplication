import React from 'react';

class KIV extends React.Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="container col-lg-6 ffset-s3 valign align-items-center">
                <div className="card">
                    <h5 className="card-header info-color white-text text-center py-2">
                        <strong>KIV Inbox</strong>
                    </h5>
                    
                        <div className="form-group">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Task Name</th>
                                        <th scope="col">Task Category</th>
                                        <th scope="col">Task Target Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    
                </div>
            </div>
        );
    }

}
export default KIV;
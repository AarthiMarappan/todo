import React from 'react';
import ProjectService from '../services/ProjectService';
import { Redirect } from 'react-router-dom';

class AddProject extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: null,
            name: '',
            status: '',
            submitted: false
        };
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    onChangeStatus = (e) => {
        this.setState({
            status: e.target.value
        });
    };

    saveProject = (e) => {
        e.preventDefault();

        var data = {
            name: this.state.name,
            status: this.state.status
        };

        ProjectService.create(data)
            .then(response => {
                console.log(response.data);
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    status: response.data.status,
                    submitted: true
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render(){
        return (
            <div>
                {this.state.submitted ? (
                    <div>
                        { alert("Project Created Successfully") }
                        <Redirect to='/' />
                    </div>
                ) : (
                    <form onSubmit={this.saveProject}>
                        <label> Name </label>
                        <input 
                            name="name" 
                            type="text"
                            onChange={this.onChangeName}
                            value={this.state.name}
                        />
                        <br/>
                        <label> Status </label>
                        <input 
                            name="status" 
                            type="text" 
                            onChange={this.onChangeStatus}
                            value={this.state.status}
                        />
                        <br/>
                        <button>Submit</button>
                    </form>
                )}
            </div>
        );
    }
}

export default AddProject;
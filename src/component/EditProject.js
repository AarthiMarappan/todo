import React from 'react';
import ProjectService from '../services/ProjectService';
import { Redirect } from 'react-router-dom';

class AddProject extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            project: {
                id: null,
                name: '',
                status: '',
                updated: false
            }
        };
    }

    componentDidMount() {
        this.getProject(this.props.match.params.id);
    }

    getProject(id) {
        ProjectService.get(id)
            .then(response => {
                this.setState({
                    project: response.data.data
                });
                console.log(this.state.project)
            })
            .catch(e => {
                console.log(e);
            }) 
    }

    onChangeName = (e) => {
        const name = e.target.value;
        this.setState(prevValue => ({
            project: {
                ...prevValue.project,
                name: name
            }
        }));
    };

    onChangeStatus = (e) => {
        const status = e.target.value;
        this.setState(prevValue => ({
            project: {
                ...prevValue.project,
                status: status
            }
        }));
    };

    updateProject = (e) => {
        e.preventDefault();

        var data = {
            name: this.state.project.name,
            status: this.state.project.status
        };

        console.log(this.state.project.name)
        ProjectService.update(this.state.project.id, data)
            .then(response => {
                console.log(response.data);
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    status: response.data.status,
                    updated: true
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render(){
        const {project} = this.state;
        return (
            <div>
                {this.state.updated ? (
                    <div>
                        { alert("Project Updated Successfully") }
                        <Redirect to='/' />
                    </div>
                ) : (
                    <form onSubmit={this.updateProject}>
                        <label> Name </label>
                        <input 
                            name="name" 
                            type="text"
                            onChange={this.onChangeName}
                            value={project.name}
                        />
                        <br/>
                        <label> Status </label>
                        <input 
                            name="status" 
                            type="text" 
                            onChange={this.onChangeStatus}
                            value={project.status}
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
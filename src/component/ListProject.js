import React from 'react';
import ProjectService from '../services/ProjectService';
import { Link } from 'react-router-dom';

class ListProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        this.projectsList();
    }

    projectsList() {
        ProjectService.getAll()
            .then(response => {
                this.setState({
                    projects: response.data.data.projects
                });
                // console.log(this.state.projects);
            })
            .catch(e => {
                console.log(e);
            }) 
    }

    render() {
        const projects = this.state.projects;
        // console.log(projects);
        
        return (
            <div>
                <div>
                    <Link to={'/projects/'}> Create </Link>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.length <= 0 ? (
                            <tr>
                                <td align="center">
                                    {/* <b>Project is yet to be created</b> */}
                                </td>
                            </tr>
                            ) : (
                            projects.map(project => (
                                <tr key={project.id}>
                                    <td>{project.id}</td>
                                    <td>{project.name}</td>
                                    <td>{project.statusName}</td>
                                    <td>{<Link to={`/projects/${project.id}`}>Edit</Link>}</td>
                                </tr>
                            ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListProject;
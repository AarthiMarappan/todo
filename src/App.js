import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import ListProject from './component/ListProject'
import AddProject from './component/AddProject'
import EditProject from './component/EditProject'

function App() {
    return (
        <Router>
            <Switch> 
                <Route exact path='/' component={ListProject}></Route> 
                <Route exact path='/projects/' component={AddProject}></Route>
                <Route path='/projects/:id' component={EditProject}></Route>
            </Switch>
        </Router> 
    );
}

export default App;

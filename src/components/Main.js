// rendering of different routes only
import React, {Component} from 'react'
import {Route, Switch } from 'react-router-dom'
import Home from './Home';
import Register from './Register';
import Login from './Login';

class Main extends Component {
    render(){
        return (
            <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch></main>
        )
    }
}

export default Main;
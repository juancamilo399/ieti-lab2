import React from 'react';
import logo from './components/logo.svg';
import './components/App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Login } from './components/Login';
import { TodoApp } from './components/TodoApp';


import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


export const App = () => {

    const LoginView = () => (
        <Login/>
    );
  
  const TodoAppView = () => (
        <TodoApp/>
    );

    return (
        <div>
           

            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            </Router>

            
        </div>
    )
}



export default App;

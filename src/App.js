import React, { useState } from 'react';
import logo from './components/logo.svg';
import './components/App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Login } from './components/Login';
import { TodoApp } from './components/TodoApp';
import Swal from 'sweetalert2'


import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


export const App = () => {

    localStorage.setItem("Username", "juan@gmail.com");
    localStorage.setItem("Password", "pass");

    let isLogged = localStorage.getItem("isLoggedIn");
	if(isLogged === "false"){
		isLogged = false;
	} else if (isLogged === "true"){
		isLogged = true;
	}

    const [isLoggedIn, setisLoggedIn] = useState(isLogged)

    const handleSuccessfullyLogin = (e) => {
        setisLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
    }

    const handleFailedLogin = (e) => {
        Swal.fire({
            title: 'Error!',
            text: 'User or Password incorrect',
            timer: 2000,
            timerProgressBar: false,
            icon: 'error',
            showConfirmButton: false
        })
        setisLoggedIn(false);
        localStorage.setItem("isLoggedIn", false);
    }

    const LoginView = () => (
        <Login successful={handleSuccessfullyLogin} failed={handleFailedLogin} />
    );

    const TodoAppView = () => (
        <TodoApp />
    );

    return (
        <div>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br />
                    <br />

                    <ul>
                        <li><Link to="/">Login</Link></li>

                        {isLoggedIn && (<li><Link to="/todo">Todo</Link></li>)}

                    </ul>

                    <div>


                        <Route exact path="/" component={LoginView} />

                        {isLoggedIn && (<Route path="/todo" component={TodoAppView} />)}

                    </div>
                </div>
            </Router>


        </div>
    )
}



export default App;

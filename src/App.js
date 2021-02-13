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
    //localStorage.setItem("isLoggedIn","false")

    let isLogged = localStorage.getItem("isLoggedIn");

    isLogged= (isLogged==="true" ? true : false)

    const [isLoggedIn, setisLoggedIn] = useState(isLogged)

    
    const handleSuccessfullyLogin = (e) => {
        Swal.fire({
            title: 'Login succesfull',
            text: 'Welcome',
            timer: 2000,
            timerProgressBar: false,
            icon: 'success',
            showConfirmButton: false
        })
        localStorage.setItem("isLoggedIn", "true");
        setisLoggedIn(true)
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
        localStorage.setItem("isLoggedIn", "false");
        setisLoggedIn(false)
    }

    const LoginView = () => (
        <Login successful={handleSuccessfullyLogin} failed={handleFailedLogin} />
    );

    const TodoAppView = () => (
        <TodoApp />
    );

  
    const correct=   isLoggedIn ? TodoAppView:LoginView
 
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

                    <div>
                        
                        <Route path="/" component={correct} />
                        <Route path="/todo" component={correct} />
                        
                    </div>
                </div>
            </Router>

        </div>
    )
}

export default App;

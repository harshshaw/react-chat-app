import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import './App.css'

export const App = () => {
    return (
        <div>
            <Router>
                <Route path='/' exact component={HomePage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/signup' component={RegisterPage}/>
            </Router>
        </div>
    )
}
export default App;
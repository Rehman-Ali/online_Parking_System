import React, {Component} from 'react';
import {BrowserRouter as Router, Route,NavLink} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import Home from '../Home/Home';
import Booking from '../booking/Booking';
import Feedback from '../Feedback/Feedback';
import Aboutus from '../aboutus/Aboutus';
import Login from '../loginForm';

export default class NavBar extends Component {
    render() {
        return (
            <Router>
            <div>
                <nav>
                    <div className="nav-wrapper z-depth-4">
                        <div class="container">
                            <a href="#!" className="brand-logo"> 
                            <i className="material-icons">directions_car</i>
                            Parking System</a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li> 
                                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to="/booking">Booking</NavLink>
                                </li>
                               
                                <li>
                                    <NavLink activeClassName="active" to="/feedback">Feedback</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to="/aboutus">About us</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="active" to="/login">Login</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/booking' component={Booking}/>
                    <Route path='/feedback' component={Feedback}/>
                    <Route path='/aboutus' component={Aboutus}/>
                    <Route path='/login' component={Login}/>
                   
                    </div>
            </div>
            </Router>
        )
    }
}

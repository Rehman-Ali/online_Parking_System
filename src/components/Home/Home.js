import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import '../assests/css/style.css';
import {BrowserRouter as Router, Route,NavLink} from "react-router-dom";


export default class Home extends Component {
    render() {
        return (
           
            <div>
            <div className="backimg z-depth-4">
            <div className="shadow valign-wrapper center-align white-text">
                <div className="container">
                    <h3>
                        Make easy money by renting out your parking space.</h3>
                        <a href="/booking" class="btn-floating btn-large cyan pulse"><i class="material-icons">book</i></a> 
                </div>
            </div>
        </div> 
                  
                  
                </div>
           
        )
    }
}
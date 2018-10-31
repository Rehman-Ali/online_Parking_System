import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import NavBar from './NavBar';

export default class Header extends Component {
    render() {
        return (
            <div>
           <NavBar />
               
            </div>
        )
    }
}

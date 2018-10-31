import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './assests/css/style.css';
import {connect} from 'react-redux';
import {getSignUpData} from '../store/actions/loginactions';

import img from './assests/images/bg1.jpg';
var bgimage = {
  height: window.innerHeight,
  backgroundImage: `url(${img})`
}
class SignUp extends Component {

  render() {
    return (
      <div style={bgimage} className="valign-wrapper">
        <div className="container">
          <div className="row center-align">
            <div className="col m3"></div>
            <div className="col m6 z-depth-3 login">
              <div className="white-text">
                  <div> <h4>
                  <i className="material-icons prefix">account_balance</i>sign-up</h4>
                 <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input type="text" id="autocomplete-input" className="autocomplete"/>
                  <label htmlFor="autocomplete-input">User Name</label>
                 </div>
                  <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input type="text" id="autocomplete-input" className="autocomplete"/>
                  <label htmlFor="autocomplete-input">Password</label>
                 </div>
                  
                  <a class="waves-effect waves-light btn">
                  <i class="material-icons left">cloud</i>sign-up</a>
                  </div>
                
              </div>
            </div>
            <div className="col m3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null,{getSignUpData})(SignUp);

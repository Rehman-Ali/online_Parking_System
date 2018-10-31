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
class LoginForm extends Component {
     
  constructor(props){
    super(props);
    this.state = {
      signin:true
    };
 
    
  }

  render() {
    return (
      <div style={bgimage} className="valign-wrapper">
        <div className="container">
          <div className="row center-align">
            <div className="col m3"></div>
            <div className="col m6 z-depth-3 login">
              <div className="white-text">
              
              {this.state.signin ? 
              <div>
                <h4>
                  <i className="material-icons prefix">account_balance</i>Login</h4>
                  <form onSubmit={(e) =>{
                    e.preventDefault();
                    var obj = {
                      name:this.refs.name.value,
                      pass:this.refs.pass.value

                    }
                    this.props.getSignUpData(obj);
                  }}>
                  <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input type="text" ref="name" id="autocomplete-input" className="autocomplete"/>
                  <label htmlFor="autocomplete-input">User Name</label>
                  </div>
                  <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input type="text" ref="pass" id="autocomplete-input" className="autocomplete"/>
                  <label htmlFor="autocomplete-input">Password</label>
                </div>
                  <input value="sign-in" type="submit" className="waves-effect waves-light btn"/>
                  
                  </form>
                  </div>
                  :
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
                  }
              </div>
            </div>
            <div className="col m3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null,{getSignUpData})(LoginForm);

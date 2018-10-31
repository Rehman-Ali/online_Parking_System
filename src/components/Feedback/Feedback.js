import React, { Component } from 'react';
import '../assests/css/style.css';
import Snackbar from 'material-ui/Snackbar';
import { colors } from 'material-ui/styles';

export default class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
      }
    
      handleClick () {
        this.setState({
          open: true,
        });
      };
    
      handleRequestClose () {
        this.setState({
          open: false,
        });
      };


    render() {
        return (
            <div>

                <Snackbar
          open={this.state.open}
          message="your message has been recived!thankyou"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          
        />
               <div>
        
            <div className="feedback z-depth-4">
            <div className="shadow valign-wrapper center-align white-text">
                <div className="container">
                   <div className="row"> 
                   <div className="col m12">
                    <h3>feedback</h3>
                    <p>Your feedback is highly appreciated and will help us to improve our ability to serve you and other users of our web sites. For your convenience, we provide you the following two options: A questionnaire which will provide us with specific information needed to maintain the educational services and products we offer.</p>
                    </div> 
                    <div className="col-m12">
                    <div >
              <div className="white-text">
                  <div> 
                      <form onSubmit={
                    (e)=>{
                        e.preventDefault();
                        var url = '/feedback';
var data = {username: this.refs.name.value,
email:this.refs.email.value,
message:this.refs.message.value
};


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), 
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => {
    this.handleClick();
    res = res.json()
})
.catch(error => console.error('Error:', error));
                    }
                    
                    }>
                 <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input ref="name" required type="text" id="autocomplete-input" className="autocomplete"/>
                  <label htmlFor="autocomplete-input">User Name</label>
                 </div>


                    <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input ref="email" required type="email" id="autocomplete-input" className="autocomplete"/>
                  <label htmlFor="autocomplete-input">Email</label>
                 </div>

                  <div className="input-field col s12">
                  <i className="material-icons prefix">message</i>
                  <input ref="message" required type="text" id="autocomplete-input" className="autocomplete"/>
                  <label htmlFor="autocomplete-input">Message</label>
                 </div>
                  
                 <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
                  </form>
                  </div>
                
              </div>
            </div>
                     </div> 
                   </div> 
                </div>
            </div>
        </div> 
                  
                  
                </div>
            </div>
        )
    }
}

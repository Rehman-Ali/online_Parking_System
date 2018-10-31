import React, { Component } from 'react';
import chiniot from '../assests/images/chiniot bazar.jpg';
import lalmill from '../assests/images/lalmill chowk.jpg';
import millat from '../assests/images/milat chock.jpg';
import Lallmillchock from './Lallmillchock';
import ChoniotBazar from './ChoniotBazar';
import MillatChock from './MiillatChock';

export default class Booking extends Component {
    constructor(props) {
      super(props);
      this.state = {
          lalmillchock :false,
          chiniot:false,
          millatchock:false
      }
    }

    handleChoniot(prev) {
    
        this.setState({
            chiniot:!this.state.chiniot
        })
        
    }
    handleMillat(prev) {
    
        this.setState({
            millatchock:!this.state.millatchock
        })
        
    }

    handlelallMill(prev) {
    
        this.setState({
            lalmillchock:!this.state.lalmillchock
        })
        
    }
    render() {
        return (
            <div>
               <div className="bookings z-depth-4">
                        <div className="shadow valign-wrapper center-align white-text">
                            <div >
                                <h3>
                                    We have three parkings Areas!</h3>
                               <div className="row">
                              
                                    <div className="col m4 margins">
                                        
                                    <img className="responsive-img circle" src={chiniot} />
                                    <h4>Chiniot bazar</h4>
                                    <p>Take a break now and let our tool upload your files and convert them one by one, automatically choosing the proper compression parameters for every file</p>

                                     <a onClick={this.handleChoniot.bind(this)} className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">add</i></a>
                                    </div>
                                     
                                    <div className="col m4 margins">
                                    <img className="responsive-img circle" src={millat} />
                                    <h4>Millat Chok</h4>
                                    <p>Take a break now and let our tool upload your files and convert them one by one, automatically choosing the proper compression parameters for every file</p>

                                     <a onClick={this.handleMillat.bind(this)}className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">add</i></a>
                                   
                                    </div>
                                    <div className="col m4 margins">
                                    <img className="responsive-img circle" src={lalmill} />
                                    <h4>Lal MIll Chock</h4>
                                    <p>Take a break now and let our tool upload your files and convert them one by one, automatically choosing the proper compression parameters for every file</p>

                                     <a  onClick={this.handlelallMill.bind(this)} className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">add</i></a>
                                   
                                    </div>
                               </div>

                            </div>
                        </div>
                    </div>
                    
                    
               {this.state.chiniot ? <ChoniotBazar /> :<div></div>}
               {this.state.lalmillchock ? <Lallmillchock/> :<div></div>}
               {this.state.millatchock ? <MillatChock/> :<div></div>}
            </div>
        )
    }
}

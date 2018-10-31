import React, { Component } from 'react';
import '../assests/css/footer.css';
import fb from '../assests/images/facebook-icon.jpg';
import tw from '../assests/images/twitter-icon.jpg';
import insta from '../assests/images/linkedin-icon.jpg';

export default class Footer extends Component {
    render() {
        return (
            <div>
               
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">about us!</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                <p>Meet the Team.</p>
                <p>Over the years we have grown in all aspects — and continue to every day — but our goals have remained the same. Have fun while working with the best technology at hand.</p>
                
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Our Details  </h5>
                <ul className="foot">
                  <li><a className="grey-text text-lighten-3" href="#!">Cashless parking solution</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Car park management</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Hotel car parks</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">
Stadium parking</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Copyright.
            <a className="grey-text text-lighten-4 right pad" href="#!"><img className="responsive-img circle" src={fb}/></a>

            <a className="grey-text text-lighten-4 right pad" href="#!"><img className="responsive-img circle" src={tw}/></a>

            <a className="grey-text text-lighten-4 right pad" href="#!"><img className="responsive-img circle" src={insta}/></a>
            </div>
          </div>
        </footer>

            </div>
        )
    }
}

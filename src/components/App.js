import React, { Component } from 'react';
import Header from './header/Header';
import LoginForm from './loginForm';
import Footer from './footer/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
              <Header />
         {/* <LoginForm /> */}
                <Footer />
                </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
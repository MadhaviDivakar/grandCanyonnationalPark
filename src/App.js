import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { PARKS } from './shared/parks'

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        parks: PARKS
      }
    }
  render() {
      return (
          <div className="App">
              <Navbar dark color="success">
              <div className="container">
                  <NavbarBrand href="/">NationalParks</NavbarBrand>
              </div>
              </Navbar>
              <Directory parks={this.state.parks}/>
          </div>
      );
  }
}


export default App;

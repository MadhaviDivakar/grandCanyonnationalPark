import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import ParkInfo from './ParkInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { PARKS } from '../shared/parks'

class Main extends Component {
    constructor(props){
      super(props);
      this.state = {
        parks: PARKS,
        selectedPark: null
      }
    }
    onParkSelect(parkId) {
      this.setState({selectedPark: parkId});
  }
  render() {
      return (
          <div>
              <Header/>
              <Directory parks={this.state.parks} onClick={parkId=> this.onParkSelect(parkId)}/>
               {/* here you are rendering into different component */}
               <ParkInfo park = {this.state.parks.filter(park => park.id === this.state.selectedPark)[0]}/> 
              <Footer/>
                
          </div>
      );
  };
}


export default Main;

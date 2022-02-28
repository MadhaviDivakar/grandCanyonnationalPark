import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import ParkInfo from './ParkInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComonent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PARKS } from '../shared/parks';
import { CAMPSITES } from '../shared/parks';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';


class Main extends Component {
    constructor(props){
      super(props);
      this.state = {
        parks: PARKS,
        comments: COMMENTS,
        partners: PARTNERS,
        promotions: PROMOTIONS
      }
    }
  render() {
    const HomePage = () => {
      return (
        <Home 
          park={this.state.parks.filter(park => park.featured)[0]}
          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
          partner={this.state.partners.filter(partner => partner.featured)[0]}
        />
      );
    }

    const ParkWithId = ({match}) =>{
      return (
        <ParkInfo
          park={this.state.parks.filter(park => park.id === +match.params.parkId)[0]}
          comments={this.state.comments.filter(comment => comment.parkId === +match.params.parkId)} />
      );

    }
      return (
          <div>
              <Header/>
              <Switch>
                  <Route path='/home' component={HomePage} />
                  < Route exact path= '/directory' render= {()=><Directory parks={this.state.parks}/>}/>
                  <Route path='/directory/:parkId' component={ParkWithId} />
                  <Route exact path='/contactus' component={Contact} />
                  <Redirect to='/home' />
              </Switch>
              <Footer/>
                
          </div>
      );
  };
}


export default Main;

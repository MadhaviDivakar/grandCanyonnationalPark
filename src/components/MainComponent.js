import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import ParkInfo from './ParkInfoComponent';
import GiftShop from './GiftShopComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComonent';
// import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PARKS } from '../shared/parks';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import { ARTICLES } from '../shared/articles';


class Main extends Component {
    constructor(props){
      super(props);
      this.state = {
        parks: PARKS,
        articles: ARTICLES,
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
                  <Route exact path= '/directory' render= {()=><Directory parks={this.state.parks}/>}/>
                  <Route path='/directory/:parkId' component={ParkWithId} />
                  <Route path='/giftshop' render={()=><GiftShop articles={this.state.articles}/>}/> 
                  <Route exact path='/contactus' component={Contact} />
                  {/* <Route exact path='/aboutus' render= {() =><About partners={this.state.partners}/>}/> */}
                  <Redirect to='/home' />
              </Switch>
              <Footer/>
                
          </div>
      );
  };
}


export default Main;

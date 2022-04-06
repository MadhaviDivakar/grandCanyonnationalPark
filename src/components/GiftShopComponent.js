import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class GiftShop extends Component {
    render(){
        const gift = this.props.articles.map(art =>{
            return(
                <div key={art.id} className='col-md-5 m-1'>
                    <CardImg variant="top" src={art.image} alt={art.name} width="350 px" height="350 px"/>
                    <CardTitle>{art.name}</CardTitle>
                </div>
            );
        });

        return(
            <div class="container">
                <div className="row">
                    {gift}
                </div>
            </div>
        )

    }

}

export default GiftShop;
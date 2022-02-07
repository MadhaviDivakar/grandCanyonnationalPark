import React, { Component } from 'react';
import ParkInfo from './ParkInfoComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedPark: null
        };
    }

    onParkSelect(park) {
        this.setState({selectedPark: park});
    }

    render(){
        const directory = this.props.parks.map(park => {
            return (
                <div key ={park.id} className="col-md-5 m-1">
                    <Card onClick={()=> this.onParkSelect(park)}>
                        <CardImg width="100%" src={park.image} alt={park.name} />
                        <CardImgOverlay>
                            <CardTitle>{park.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return(
            <div className='container'>
                <div className='row'>
                    {directory}
                </div>
                {/* here you are rendering into different component */}
                <ParkInfo park = {this.state.selectedPark}/> 
                
                
            </div>

        );
    }
}
export default Directory;
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({park}) {
    return (
        <Card>
            <Link to={`/directory/${park.id}`}>
                <CardImg width="100%" src={park.image} alt={park.name} />
                    <CardImgOverlay>
                        <CardTitle>{park.name}</CardTitle>
                    </CardImgOverlay>
            </Link>
        </Card>
    )
}

function Directory(props){
    
    const directory = props.parks.map(park => {
        return (
            <div key ={park.id} className="col-md-5 m-1">
                <RenderDirectoryItem park={park} />
            </div>
        )
    })
    return(
        <div className='container'>
            <div className='row'>
                {directory}
            </div>
            
        </div>

    );
}
export default Directory;
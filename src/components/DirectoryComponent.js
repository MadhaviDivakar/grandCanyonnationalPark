import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({park, onClick}) {
    return (
        <Card onClick={()=> onClick(park.id)}>
             <CardImg width="100%" src={park.image} alt={park.name} />
                        <CardImgOverlay>
                            <CardTitle>{park.name}</CardTitle>
                        </CardImgOverlay>
        </Card>
    )
}

function Directory(props){
    
    const directory = props.parks.map(park => {
        return (
            <div key ={park.id} className="col-md-5 m-1">
                <RenderDirectoryItem park={park} onClick={props.onClick} />
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
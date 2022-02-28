import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



   function RenderSelectedPark({park}){
        return(
            <div className='col-md-5  m-1'>
                <Card>
                    <CardImg top src={park.image} alt={park.name} />
                    <CardBody>
                        <CardTitle>{park.name}</CardTitle>
                        <CardText>{park.description}</CardText>
                        <CardText>elevation: {park.elevation} ft</CardText>
                    </CardBody>
                </Card>
            </div>
        );

    }
    function RenderComments({comments}){
        if (comments){
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment =>{
                        return(
                            <div key={comments.id}>
                                <p>
                                    {comment.text}
                                    <div>
                                    --{comment.author},
                                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', 
                                        day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                    </div>
                                </p>
                            </div>
                        )
                    })
                    }
                </div>
            );
        }
        return <div/>;
    }
   
    function ParkInfo(props){
        if (props.park){
        return(
            <div className='container'>
                <div className='row'>
                    {/* info is got as props from another component */}
                    <RenderSelectedPark park={props.park}/>
                    <RenderComments comments= {props.comments}/>
                </div>
            </div>
        ); 
        }
        return <div />;
    } 
    
export default ParkInfo;
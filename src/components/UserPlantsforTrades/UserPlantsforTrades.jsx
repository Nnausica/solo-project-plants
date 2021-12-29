import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 
import OfferTrade from '../OfferTrade/OfferTrade';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function UserPlantsforTrades(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();

  const plants = useSelector((store) => store.plants);
  const plantItem = useSelector((store)=> store.plantItem);
  const user = useSelector((store)=> store.user);

  const [heading, setHeading] = useState('My Plants');

  useEffect(()=>{ 
    dispatch({type: 'FETCH_PLANTS', payload:user.id})
  }, []);

  return (
    <div>
      <h2 className="header">{heading}</h2>
      {/* <p>{JSON.stringify(plants)}</p> */}
      <section>
        {plants.map( plant => {
        // maps the plants associated with the user's ID
          return(
            <div>
              <div key={plant.id} >
              <Container className="cardsContainer">
                <Row>
                  <Col>
                    <Card className="plantCard">
                      <Card.Body>
                        <img src={plant.photo}/>         
                        <Card.Title><h3>{plant.plant_name} </h3></Card.Title>
                        <Card.Text><h3> {plant.description} </h3></Card.Text>
                        <OfferTrade plant={plant}/>
                      </Card.Body>
                    </Card>  
                  </Col>
                </Row>
              </Container> 
                </div>
              
            </div>
          )
        
        })}

      </section>           
  
   
    </div>
  ); //end return
} //end UserPlantsforTrades

export default UserPlantsforTrades;
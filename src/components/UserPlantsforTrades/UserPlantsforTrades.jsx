import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 
import OfferTrade from '../OfferTrade/OfferTrade';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import "../UserPlantsforTrades/UserPlantsforTrades.css";


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

      <Container className="cardsContainer">
        {plants.map( plant => {
        // maps the plants NOT associated with the user's ID
          return(

               <div>
                    <Card className="plantCard">
                      <Card.Body>
                        <Card.Img className="cardImage" src={plant.photo}/>    
                        <center>    
                          <Card.Title className="plantName"><h3>{plant.plant_name} </h3></Card.Title>
                          <Card.Text>{plant.description}</Card.Text>
                          </center> 
                        <OfferTrade plant={plant}/>
                      </Card.Body>
                    </Card>  
                </div>
          )
        })}         
      </Container>
   
    </div>
  ); //end return
} //end UserPlantsforTrades

export default UserPlantsforTrades;
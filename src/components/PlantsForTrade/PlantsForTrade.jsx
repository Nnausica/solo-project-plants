import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

function PlantsForTrade(props) {
  // shows all plants for trade

  const dispatch = useDispatch();
  
  const store = useSelector((store) => store);
  const tradeplants = useSelector((store) => store.tradeplants);
  const user = useSelector((store)=> store.user);

  const [heading, setHeading] = useState('Plants for Trade');

  useEffect(()=>{ 
    dispatch({type: 'FETCH_TRADES', payload:user.id})
  }, []);

  return (
    <div>
      <h2 className="header">{heading}</h2>
      {/* <p>{JSON.stringify(tradeplants)}</p> */}
      <Container className= "cardsContainer">
        {tradeplants.map( tradeplant => {
            const setPlantDetail = ()=>{
              dispatch({
                  type: 'SET_TRADEPLANT_ITEM',
                  payload: {id: tradeplant.id, 
                            user_id: tradeplant.user_id,
                            name: tradeplant.plant_name, 
                            description: tradeplant.description,
                            available: tradeplant.available,
                            requester_id: tradeplant.requester_id,
                            photo: tradeplant.photo,
                          }
              });//end dispatch
          }//end const

          return(
            <div>
                <Card className="plantCard">
                  <Card.Body>    
                  <Card.Img className="cardImage" src={tradeplant.photo}/>    
                  <center>
                    <Card.Title className="plantName">{tradeplant.plant_name}</Card.Title>
                    <Card.Text className="plantDescription">{tradeplant.description}</Card.Text>
                  
                    <Link to="/TradePlantDetail" ><Button className="primaryButton" onClick={setPlantDetail}>'View Plant Details'</Button></Link>
                    </center>  
                  </Card.Body>
                </Card>   
            </div>
          )
        
        })}           
      </Container>   
    </div>
  );
}

export default PlantsForTrade;

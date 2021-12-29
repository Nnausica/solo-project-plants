import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function UserPlants(props) {
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
      <h2>{heading}</h2>

      <section>
        {plants.map( plant => {
            const setPlantDetail = ()=>{
              dispatch({
                  type: 'SET_PLANT_ITEM',
                  payload: {id: plant.id, 
                            user_id: plant.user_id,
                            name: plant.plant_name, 
                            description: plant.description,
                            available: plant.available,
                            requester_id: plant.requester_id,
                            // photo: plant.photo,
                          }
              });//end dispatch
          }//end const

          return(
            <div>
              <div key={plant.id} >
              <Container className="cardsContainer">
           
                <Col md="auto">
                  <Card className="plantCard"> 
                    {/* <Card.Img variant="top" src={plant.photo}/>    */}
                    <Card.Body>
                      {/* <img src={plant.photo}/> */}
                      <Card.Title><h4>{plant.plant_name} </h4></Card.Title>
                      <Card.Text><p> {plant.description} </p></Card.Text>
                        <Link to="/PlantDetail" ><Button className="primaryButton" onClick={setPlantDetail}>'View Plant Details'</Button></Link>
                    </Card.Body>
                  </Card> 
                </Col>
            
              </Container>       
                </div>
                    
              
            </div>
          )
        
        })}

      </section>           
   
   
   
   
   
    </div>
  ); //end return
} //end userplants

export default UserPlants;
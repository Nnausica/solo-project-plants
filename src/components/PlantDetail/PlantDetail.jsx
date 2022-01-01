import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import MakeAvailable from '../MakeAvailable/MakeAvailable';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import "../PlantDetail/PlantDetail.css";



function PlantDetail(props) {

  const store = useSelector((store) => store);
  const plantItem = useSelector((store) => store.plantItem);


  const [heading, setHeading] = useState('');



  return (
    <div className="pageContainer">
      <h2>{heading}</h2>

      {/* <p>{JSON.stringify(plantItem)}</p> */}

      <h3>{plantItem.name} Details</h3>
      <Card className="largePlantCard">
        <Card.Body>
          <img src={plantItem.photo}/>
          <Card.Title><p>{plantItem.name}</p></Card.Title>
          <Card.Text><p>{plantItem.description}</p></Card.Text>
          <MakeAvailable/>
        </Card.Body>
      </Card>
    
      <Link to="/plant"><button className="primaryButton" >Back to My Plants</button></Link>
    </div>
  );
}

export default PlantDetail;

import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import MakeAvailable from '../MakeAvailable/MakeAvailable';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function PlantDetail(props) {

  const store = useSelector((store) => store);
  const plantItem = useSelector((store) => store.plantItem);


  const [heading, setHeading] = useState('');



  return (
    <div>
      <h2>{heading}</h2>

      <p>{JSON.stringify(plantItem)}</p>

      <p>{plantItem.name} Details</p>
      <Card>
      <img src={plantItem.photo}/>
      <p>{plantItem.name}</p>
      <p>{plantItem.description}</p>
      <MakeAvailable/>
      </Card>
    
      <Link to="/plant"><button className="primaryButton" >Back to My PLants</button></Link>
    </div>
  );
}

export default PlantDetail;

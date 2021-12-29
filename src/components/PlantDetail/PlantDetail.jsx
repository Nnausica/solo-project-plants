import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import MakeAvailable from '../MakeAvailable/MakeAvailable';


function PlantDetail(props) {

  const store = useSelector((store) => store);
  const plantItem = useSelector((store) => store.plantItem);


  const [heading, setHeading] = useState('Functional Component');



  return (
    <div>
      <h2>{heading}</h2>
      <p>In Plant Details</p>
     {/* <p>{JSON.stringify(plantItem)}</p> */}
      <img src={plantItem.photo}/>
      <p>{plantItem.name}</p>
      <MakeAvailable/>
    
      <Link to="/plant"><button>Back to PLant List</button></Link>
    </div>
  );
}

export default PlantDetail;

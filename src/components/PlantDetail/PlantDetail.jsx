import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 


function PlantDetail(props) {

  const store = useSelector((store) => store);
  const plantItem = useSelector((store) => store.plantItem);


  const [heading, setHeading] = useState('Functional Component');



  return (
    <div>
      <h2>{heading}</h2>
      <p>In Plant Details</p>
     
      <p>{plantItem.name}</p>
    
    </div>
  );
}

export default PlantDetail;

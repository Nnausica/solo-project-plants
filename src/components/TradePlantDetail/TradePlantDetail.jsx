import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import MakeAvailable from '../MakeAvailable/MakeAvailable';


function TradePlantDetail(props) {

  const store = useSelector((store) => store);
  const tradeplantitem = useSelector((store) => store.tradeplantitem);


  const [heading, setHeading] = useState('Plant for Trade');



  return (
    <div>
      <h2>{heading}</h2>
      <p>In Plant Details</p>
     <p>{JSON.stringify(tradeplantitem)}</p>
      <p>{tradeplantitem.name}</p>
      <MakeAvailable/>
    
      <Link to="/PlantsForTrade"><button>Back to Plants for Trade</button></Link>
    </div>
  );
}

export default TradePlantDetail;

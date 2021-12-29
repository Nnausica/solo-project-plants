import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import OfferATradeButton from '../OfferATradeButton/OfferATradeButton';



function TradePlantDetail(props) {

  const store = useSelector((store) => store);
  const tradeplantitem = useSelector((store) => store.tradeplantitem);
  const plantItem = useSelector((store) => store.plantItem);

  const [heading, setHeading] = useState('Plant for Trade Details');



  return (
    <div>
      <h2>{heading}</h2>
    
     {/* <p>{JSON.stringify(tradeplantitem)}</p> */}
      <p>{tradeplantitem.name}</p>
      <p>{tradeplantitem.description}</p>

      <OfferATradeButton/>

    
      {/* <Link to="/PlantsForTrade"><button>Back to Plants for Trade</button></Link> */}
    </div>
  );
}

export default TradePlantDetail;

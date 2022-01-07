import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'; 
import UserPlantsforTrades from '../UserPlantsforTrades/UserPlantsforTrades';
import Button from 'react-bootstrap/Button';



function OfferATradeButton(props) {
 
  const store = useSelector((store) => store);
  const plantItem = useSelector((store) => store.plantItem);
  
  const [heading, setHeading] = useState('');
  const dispatch = useDispatch();

  const[offerTrade, SetOfferTrade]= useState(false);

  const toggleOfferTrade = ()=>{
    SetOfferTrade( !offerTrade);
  }


  return (
    <div>
      {
        //if OfferTrade is true- show list of plant details
        offerTrade?
        <span>
            {/* <p>This will be the list of user plants</p> */}
            <UserPlantsforTrades/>
            <Link to="/PlantsForTrade"><Button className="primaryButton" onClick={toggleOfferTrade}>JK Dont want to trade</Button> </Link>
        </span>
        :
        //if OfferTrade is false show nothing....
        <span>
            <Button className="primaryButton" onClick={toggleOfferTrade}>Offer a Trade</Button>
        </span>
      
      }
        
    </div>
  )
}

export default OfferATradeButton;

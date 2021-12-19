import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


function OfferATrade(props) {
 
  const store = useSelector((store) => store);
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
            <p>This will be the list of user plants</p>
            <button onClick={toggleOfferTrade}>JK Dont want to trade</button>
        </span>
        :
        //if OfferTrade is false show nothing....
        <span>
            <p> edit mode is false- this is a test sentance</p>
            <button onClick={toggleOfferTrade}>Offer a Trade</button>
        </span>
      
      }
        
    </div>
  )
}

export default OfferATrade;

import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name OfferTrade with the name for the new component.
function OfferTrade(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const tradeplantitem = useSelector((store) => store.tradeplantitem);
  const plants = useSelector((store) => store.plants);


  const [heading, setHeading] = useState('');
  const dispatch = useDispatch();

const OfferTrade = () => {
  // dispatch with NewPlant as the payload
  console.log('in OfferTrade funtion', plants.id);

    dispatch( {type:'FETCH_OFFER_TRADE', payload: { owner_id: tradeplantitem.user_id, 
                                              ownedplant_id: tradeplantitem.id, //this is undefined
                                              trader_id: plants.user_id, //undefined
                                              tradeplant_id: plants.id, //undefined
                                               } } );
    console.log("dispatch payload", payload);
}

  return (
    <div>
          <button onClick={OfferTrade}>Offer A Trade</button>
    </div>
  )
}

export default OfferTrade;

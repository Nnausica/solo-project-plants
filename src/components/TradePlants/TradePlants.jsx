import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

function TradePlants(props) {

  const store = useSelector((store) => store);
  const plantItem = useSelector((store) => store.plantItem);

  const [heading, setHeading] = useState('Functional Component');
  const dispatch = useDispatch();


  const[newAvailability, setnewAvailability]= useState();

  const changeAvailability = ()=>{
    console.log('in newAvailability');
    setnewAvailability(event.target.value);
}

const EditPlant = () => {
  // dispatch with NewPlant as the payload
    dispatch( {type:'TRADE_PLANTS', payload: {available: newAvailability, id:plantItem.id}} );
    console.log("dispatch payload", plantItem);
}

  return (
    <div>
      <select onChange={(event) => changeAvailability(event)}>
        <option value="True">Yes</option>
        <option value="False">No</option>
      </select>
      <button className="primaryButton" onClick={EditPlant}>Confirm Trade</button>
      <p>{JSON.stringify(plantItem)}</p>
    </div>
  )
}

export default TradePlants;

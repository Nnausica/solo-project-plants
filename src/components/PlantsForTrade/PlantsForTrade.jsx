import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';


function PlantsForTrade(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();
  
  const store = useSelector((store) => store);
  const tradeplants = useSelector((store) => store.tradeplants);
  const user = useSelector((store)=> store.user);

  const [heading, setHeading] = useState('Plants for Trade');
  
 

  useEffect(()=>{ 
    dispatch({type: 'FETCH_TRADES', payload:user.id})
  }, []);

  return (
    <div>
      <h2>{heading}</h2>
      <p>{JSON.stringify(tradeplants)}</p>
    </div>
  );
}

export default PlantsForTrade;

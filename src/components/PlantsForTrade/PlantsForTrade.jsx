import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name PlantsForTrade with the name for the new component.
function PlantsForTrade(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Plants for Trade');
  
  const tradeplants = useSelector((store) => store.tradeplants);
  const user = useSelector((store)=> store.user);

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

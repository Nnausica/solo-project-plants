import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name UserPlants with the name for the new component.
function UserPlants(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();
  const plants = useSelector((store) => store.plants);


  useEffect(()=>{ 
    dispatch({type: 'FETCH_PLANTS'})
  }, []);

  const [heading, setHeading] = useState('Plants');

  return (
    <div>
      <h2>{heading}</h2>
      <p>{JSON.stringify(plants)}</p>
    </div>
  );
}

export default UserPlants;
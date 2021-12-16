import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name UserPlants with the name for the new component.
function UserPlants(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();
  const plants = useSelector((store) => store.plants);
  const plantItem = useSelector((store)=> store.plantItem);
  const [heading, setHeading] = useState('My Plants');

  useEffect(()=>{ 
    dispatch({type: 'FETCH_PLANTS'})
  }, []);

 

  return (
    <div>
      <h2>{heading}</h2>
      <p>{JSON.stringify(plants)}</p>


      <section>
        {plants.map( plant => {
            const setPlantDetail = ()=>{
              dispatch({
                  type: 'SET_PLANT_ITEM',
                  payload:plant
              });//end dispatch
          }//end const

          return(
            <div>
              <Link to="/PlantDetail"><p>{plant.plant_name}</p></Link>
              <p>{JSON.stringify(plant)}</p>
              
            </div>
          )
        
        })}

      </section>           
   
   
   
   
   
    </div>
  ); //end return
} //end userplants

export default UserPlants;
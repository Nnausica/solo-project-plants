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
                  payload: {id: plant.id, 
                            user_id: plant.user_id,
                            name: plant.plant_name, 
                            description: plant.description,
                            available: plant.available,
                            requester_id: plant.requester_id,
                          }
              });//end dispatch
          }//end const

          return(
            <div>
              {/* <Link to="/PlantDetail"><p>{plant.plant_name}</p></Link>
              <p>{JSON.stringify(plant)}</p> */}
              
              <div key={plant.id} >
                            
                            <h3>{plant.name} </h3>
                            <h3> {plant.description} </h3>
                            <Link to="/PlantDetail" ><button onClick={setPlantDetail}>'this button is extra'</button></Link>
                        </div>
                    );
              
            </div>
          )
        
        })}

      </section>           
   
   
   
   
   
    </div>
  ); //end return
} //end userplants

export default UserPlants;
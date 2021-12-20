import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 



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
      {/* <p>{JSON.stringify(tradeplants)}</p> */}

      <section>
        {tradeplants.map( tradeplant => {
            const setPlantDetail = ()=>{
              dispatch({
                  type: 'SET_TRADEPLANT_ITEM',
                  payload: {id: tradeplant.id, 
                            user_id: tradeplant.user_id,
                            name: tradeplant.plant_name, 
                            description: tradeplant.description,
                            available: tradeplant.available,
                            requester_id: tradeplant.requester_id,
                          }
              });//end dispatch
          }//end const

          return(
            <div>
              {/* <Link to="/PlantDetail"><p>{plant.plant_name}</p></Link>
              <p>{JSON.stringify(plant)}</p> */}
              
              <div key={tradeplant.id} >
                            
                            <h3>{tradeplant.plant_name} </h3>
                            <h3> {tradeplant.description} </h3>
                            <Link to="/TradePlantDetail" ><button onClick={setPlantDetail}>'View PLant Details'</button></Link>
                        </div>
                    );
              
            </div>
          )
        
        })}

      </section>           

    </div>
  );
}

export default PlantsForTrade;

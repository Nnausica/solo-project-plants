import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 
import OfferTrade from '../OfferTrade/OfferTrade';


function UserPlantsforTrades(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();

  const plants = useSelector((store) => store.plants);
  const plantItem = useSelector((store)=> store.plantItem);
  const user = useSelector((store)=> store.user);

  const [heading, setHeading] = useState('My Plants');

  useEffect(()=>{ 
    dispatch({type: 'FETCH_PLANTS', payload:user.id})
  }, []);

  return (
    <div>
      <h2>{heading}</h2>
      {/* <p>{JSON.stringify(plants)}</p> */}
      <section>
        {plants.map( plant => {
          //   const setPlantDetail = ()=>{
          //     dispatch({
          //         type: 'SET_PLANT_ITEM',
          //         payload: {
          //                   id: plant.id, 
          //                   user_id: plant.user_id,
          //                   name: plant.plant_name, 
          //                   description: plant.description,
          //                   available: plant.available,
          //                   requester_id: plant.requester_id,
          //                 }
          //     });//end dispatch
          // }//end const

          return(
            <div>
              <div key={plant.id} >
                            
                  <h3>{plant.plant_name} </h3>
                  <h3> {plant.description} </h3>
                  <OfferTrade plant={plant}/>
                </div>
                    );
              
            </div>
          )
        
        })}

      </section>           
   
   
   
   
   
    </div>
  ); //end return
} //end UserPlantsforTrades

export default UserPlantsforTrades;
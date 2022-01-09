import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name MakeAvailable with the name for the new component.
function MakeAvailable(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
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
    dispatch( {type:'EDIT_PLANT', payload: {available: newAvailability, id:plantItem.id}} );
    console.log("dispatch payload", plantItem);
}

  return (
    <div>
              <DropdownButton onChange={(event)=>changeAvailability(event)} title="Make Availabile">
                <Dropdown.Item value="True">Yes</Dropdown.Item>
                <Dropdown.Item value="False">No</Dropdown.Item>
              </DropdownButton>
          {/* <Button onClick={EditPlant}>Make Availabile</Button> */}
          {/* <p>{JSON.stringify(plantItem)}</p> */}
    </div>
  )
}

export default MakeAvailable;

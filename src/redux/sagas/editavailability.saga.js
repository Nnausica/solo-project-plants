import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//generator function
  function* editPlantAvailability(action){

    try {
      console.log('action.payload', action.payload);
      const plant = yield axios({
                              method: 'PUT',
                              url:'api/plant',
                              data: action.payload});
      

      console.log("payload:plant.data", payload);
      yield put( {type: 'SET_NEW_AVAILABILITY', payload: plant.data});
     
      
    } catch{
      console.log('get TRADE plants error');
    }
  }


//*** watcher ***
function* editavailabilitySaga() {
  console.log("in edit watcher");
  yield takeLatest('EDIT_PLANT', editPlantAvailability);
}

export default editavailabilitySaga;

import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
//generator function
  function* editPlantAvailability(action){

    try {
      const editplant = yield axios.put(`/api/plant/${action.payload.id}`, {payload:action.payload.available});
      console.log('action.payload', action.payload);

      yield put( {type: 'SET_NEW_AVAILABILITY', payload: plant.data});
      
    } catch{
      console.log('get TRADE plants error');
    }
  }


//*** watcher ***
function* editavailabilitySaga() {
  yield takeLatest('EDIT_PLANT', editPlantAvailability);
}

export default editavailabilitySaga;

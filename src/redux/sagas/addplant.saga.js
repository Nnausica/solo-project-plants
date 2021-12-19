import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//generator function capture plant info being added by the user
//posts new plants to the database
  function* addPlants(action){

    try {
      const plants = yield axios.post('/api/plant', action.payload);
      yield put( {type: 'FETCH_PLANTS', payload: plants.data});
    } catch{
      console.log('add new plants error');
    }
  }

// watcher
function* addplantSaga() {
  yield takeLatest('ADD_NEWPLANT', addPlants);
}

export default addplantSaga;

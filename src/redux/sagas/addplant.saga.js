import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
//generator function
  function* addPlants(action){
    //get all plants from the DB or now
    //add code later to narrow down to just users plants

    try {
      const plants = yield axios.post('/api/plant', action.payload);
      yield put( {type: 'FETCH_PLANTS', payload: plants.data});
    } catch{
      console.log('add new plants error');
    }
  }

// //watcher- root saga
// function* rootsaga(){
//   yeild takeEvery('FETCH_PLANTS', fetchUserPlants)
// }

//***** OMG is this the watcher? did i figure it out? these match.....
function* addplantSaga() {
  yield takeLatest('ADD_NEWPLANT', addPlants);
}

export default addplantSaga;

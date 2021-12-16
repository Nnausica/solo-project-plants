import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
//generator function
  function* fetchPlants(){
    //get all plants from the DB or now
    //add code later to narrow down to just users plants
    try {
      const plants = yield axios.get('/api/plant');
      yield put( {type: 'SET_PLANTS', payload: plants.data});
    } catch{
      console.log('get all plants error');
    }
  }

// //watcher- root saga
// function* rootsaga(){
//   yeild takeEvery('FETCH_PLANTS', fetchUserPlants)
// }

//***** OMG is this the watcher? did i figure it out? these match.....
function* plantsSaga() {
  yield takeLatest('FETCH_PLANTS', fetchPlants);
}

export default plantsSaga;

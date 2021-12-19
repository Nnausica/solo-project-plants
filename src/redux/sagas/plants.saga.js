import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//generator function
//fetch all plants from the database that have a user_id that matches the active users id
  function* fetchPlants(action){
   

    try {
      const plants = yield axios.get('/api/plant/userplant', {params:{id:action.payload}});
      console.log('plants.data', plants.data);
      yield put( {type: 'SET_PLANTS', payload: plants.data});
    } catch{
      console.log('get all plants error');
    }
  }

//*** watcher ***
function* plantsSaga() {
  yield takeLatest('FETCH_PLANTS', fetchPlants);
}

export default plantsSaga;

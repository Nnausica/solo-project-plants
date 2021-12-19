import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//generator function
//will fetch all plants for trade without active user's id

  function* fetchTradePlants(action){
    //get all plants from the DB or now
    //add code later to narrow down to just users plants
    try {
      console.log('params?', {params:{id:action.payload}});
      const plants = yield axios.get('/api/plant/tradeplants', {params:{id:action.payload}});
      console.log('plants.data', plants.data);
      yield put( {type: 'SET_TRADE_PLANTS', payload: plants.data});
      
    } catch{
      console.log('get TRADE plants error');
    }
  }


//*** watcher ***
function* tradeplantsSaga() {
  yield takeLatest('FETCH_TRADES', fetchTradePlants);
}

export default tradeplantsSaga;

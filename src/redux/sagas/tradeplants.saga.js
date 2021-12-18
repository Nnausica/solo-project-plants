import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
//generator function
  function* fetchTradePlants(action){
    console.log('what is here???', action.payload.id);
    //get all plants from the DB or now
    //add code later to narrow down to just users plants
    try {
      const tradeplants = yield axios.get('/api/plant/tradeplants', {params:{id:action.payload}});

      yield put( {type: 'SET_TRADE_PLANTS', payload: plant.data});
      
    } catch{
      console.log('get TRADE plants error');
    }
  }


//*** watcher ***
function* tradeplantsSaga() {
  yield takeLatest('FETCH_TRADES', fetchTradePlants);
}

export default tradeplantsSaga;

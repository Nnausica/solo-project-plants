import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//generator function
//will fetch all plants for trade without active user's id

  function* fetchItemConfirms(action){
    
    try {
      // console.log('trade item params:', {params:{id:action.payload}} )
      const tradeitem = yield axios.get('/api/plant/tradeitems:id?', {params:{id:action.payload}});
      yield put( {type: 'SET_TRADE_CONFIRM_ITEM', payload: tradeitem.data});
      
    } catch{
      console.log('get TRADE plants error');
    };
  
    try {
      // console.log('trade item params:', {params:{id:action.payload}} )
      const tradeitem = yield axios.get('/api/plant/ownertradeitems:id?', {params:{id:action.payload}});
      yield put( {type: 'SET_OWNED_CONFIRM_ITEM', payload: tradeitem.data});
      
    } catch{
      console.log('get TRADE plants error');
    }
  }


//*** watcher ***
function* tradeitemsSaga() {
  console.log('in itemsconfirm watcher');
  yield takeLatest('FETCH_ITEM_CONFIRMS', fetchItemConfirms );
}

export default tradeitemsSaga;

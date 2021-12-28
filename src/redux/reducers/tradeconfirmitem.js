const tradeconfirmitem = (state = {}, action) =>{
  switch (action.type){
    case 'SET_TRADE_CONFIRM_ITEM':
      return action.payload[0];
    default:
      return state;
  }
};

export default tradeconfirmitem;

const tradeconfirmitem = (state = [], action) =>{
  switch (action.type){
    case 'SET_TRADE_CONFIRM_ITEM':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default tradeconfirmitem;

const tradeplantsitem = (state = [], action) =>{
  switch (action.type){
    case 'SET_TRADEPLANT_ITEM':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default tradeplantsitem;

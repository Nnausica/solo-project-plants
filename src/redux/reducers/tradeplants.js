const tradeplants = (state = [], action) =>{
  switch (action.type){
    case 'SET_TRADE_PLANTS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default tradeplants;
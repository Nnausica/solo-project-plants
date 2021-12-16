const plantItem = (state = [], action) =>{
  switch (action.type){
    case 'SET_PLANT_ITEM':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default plantItem;

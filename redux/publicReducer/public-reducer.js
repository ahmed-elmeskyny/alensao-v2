const INITIALE_STATE = ({
    offresPublic: null
});

const offreReturnPublic = (state, action) => {
    if (state.offresPublic ==null) {
      return [action.payload];
    } else {
      return [...state.offresPublic, action.payload];
    }
  };


export const publicReducer = (state=INITIALE_STATE , action) => {

    switch(action.type){
        case 'ADD_OFFRE_PUBLIC':{
            return {
               offresPublic : offreReturnPublic(state, action)
            }
          }
        default:
            return state;
    }
}
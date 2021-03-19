const INITIALE_STATE = ({
    offres: null
});

const offreReturn = (state, action) => {
    if (state.offres ==null) {
      return [action.payload];
    } else {
      return [...state.offres, action.payload];
    }
  };

  const deleteoffre = (state, action) => {
    if(state.offres.length == 1){
      return null
    }else {
      return  state.offres.filter((offre) => offre.id !== action.payload)
    }
  }

export const offreReducer = (state=INITIALE_STATE , action) => {

    switch(action.type){
        case 'ADD_OFFRE':{
            return {
               offres : offreReturn(state, action)
            }
          }
        case "DELETE_OFFRE": {
              return {
                offres: deleteoffre(state,action) ,
              }
            }
        default:
            return state;
    }
}
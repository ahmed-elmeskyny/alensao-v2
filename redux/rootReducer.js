import { combineReducers } from "redux";
import {userReducer} from "./uerReducer/user-reducer";
import {offreReducer} from "./offreReducer/offre-reducer";
import {publicReducer} from "./publicReducer/public-reducer";

export const rootReducer = combineReducers( {
 user: userReducer,
 offres : offreReducer,
 offresPublic : publicReducer
});
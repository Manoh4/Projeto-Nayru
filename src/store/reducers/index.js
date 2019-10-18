import { combineReducers } from "redux";
import chat from "./chat";
import watson from './watson'    


//Reducer que será a combinação de todos os reducers
const rootReducer = combineReducers({
    chat, 
    watson
})

export default rootReducer
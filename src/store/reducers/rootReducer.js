import { firebaseReducer, firestoreReducer } from "react-redux-firebase";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer

})

export default rootReducer;
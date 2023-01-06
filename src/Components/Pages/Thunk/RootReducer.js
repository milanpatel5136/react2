import { combineReducers } from "redux";
import PostReducer from "../PostReducer";
import Countarthunk from "./Conutar/Countarthunk"; 
import UserCounter from "./Conutar/UserCounter";
export default combineReducers ({

    counter : Countarthunk,
    user:UserCounter,
    posts: PostReducer
    
});

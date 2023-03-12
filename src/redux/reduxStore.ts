import { combineReducers, createStore } from "redux";
import { profilePageReducer } from "./reducers/profileReducer";
import { messageReducer } from "./reducers/messageReducer";

const rootReducer = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: messageReducer,
});

const store = createStore(rootReducer);

export default store;

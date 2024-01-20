import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers/rootReducers";

const store = configureStore({
	reducer: rootReducers,
});

export default store;

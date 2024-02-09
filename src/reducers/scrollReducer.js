import { createReducer } from "@reduxjs/toolkit";
import { scrollYAction } from "../actions/scrollAction";

const initialState = {
	scrollY: 0,
};

const scrollReducer = createReducer(initialState, (builder) => {
	builder.addCase(scrollYAction, (_state, action) => ({ scrollY: action.payload }));
});

export default scrollReducer;

import { createReducer } from "@reduxjs/toolkit";
import { showHideApplyWindow } from "../actions/showHideApplyWindowAction";

const initialState = {
	isOpen: false,
};

const showHideApplyWindowReducers = createReducer(initialState, (builder) => {
	builder.addCase(showHideApplyWindow, (_state, action) => ({ isOpen: action?.payload }));
});

export default showHideApplyWindowReducers;

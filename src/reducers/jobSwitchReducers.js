import { createReducer } from "@reduxjs/toolkit";
import { jobSwitchAction } from "../actions/jobSwitchAction";
import jobsData from "../utils/data/jobs.json";

const initialState = {
	data: {},
};

const jobSwitchReducers = createReducer(initialState, (builder) => {
	builder.addCase(jobSwitchAction, (_state, action) => ({
		data: jobsData.filter((job) => job.id === action.payload)[0],
	}));
});

export default jobSwitchReducers;

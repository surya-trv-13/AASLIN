import { createAction } from "@reduxjs/toolkit";
import { JOB_SWITCH_ACTION } from "./actionTypes";

export const jobSwitchAction = createAction(JOB_SWITCH_ACTION, (id) => ({
	payload: id,
}));

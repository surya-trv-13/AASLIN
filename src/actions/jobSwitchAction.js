import { createAction } from "@reduxjs/toolkit";
import { JOB_SWITCH_ACTION } from "./actionTypes";

export const jonSwitchAction = createAction(JOB_SWITCH_ACTION, (id) => ({
	payload: id,
}));

import { createAction } from "@reduxjs/toolkit";
import { SCROLL_Y_ACTION } from "./actionTypes";

export const scrollYAction = createAction(SCROLL_Y_ACTION, (scrollVal) => ({
	payload: scrollVal,
}));

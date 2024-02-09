import { createAction } from "@reduxjs/toolkit";
import { SHOW_APPLY_WINDOW } from "./actionTypes";

export const showHideApplyWindow = createAction(SHOW_APPLY_WINDOW, (isOpen) => ({
	payload: isOpen,
}));

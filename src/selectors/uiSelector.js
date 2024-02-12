import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback } from "react";
import { scrollYAction } from "../actions/scrollAction";
import { jobSwitchAction } from "../actions/jobSwitchAction";
import { showHideApplyWindow } from "../actions/showHideApplyWindowAction";

export const useUiSelector = () => {
	const scrollYVal = useSelector((state) => state.scrollReducer.scrollY, shallowEqual);
	const jobSwitchData = useSelector((state) => state.jobSwitchReducers.data, shallowEqual);
	const isOpenApplyWindow = useSelector(
		(state) => state.showHideApplyWindowReducers.isOpen,
		shallowEqual
	);

	//dispatch
	const dispatch = useDispatch();

	const scrollYActionCall = useCallback((payload) => dispatch(scrollYAction(payload)), [dispatch]);
	const jobSwitchActionCall = useCallback((id) => dispatch(jobSwitchAction(id)), [dispatch]);
	const openApplyWindow = useCallback(
		(isOpen) => dispatch(showHideApplyWindow(isOpen)),
		[dispatch]
	);

	return {
		scrollYVal,
		jobSwitchData,
		isOpenApplyWindow,
		scrollYActionCall,
		jobSwitchActionCall,
		openApplyWindow,
	};
};

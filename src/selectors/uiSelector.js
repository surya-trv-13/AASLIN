import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback } from "react";
import { scrollYAction } from "../actions/scrollAction";
import { jobSwitchAction } from "../actions/jobSwitchAction";

export const useUiSelector = () => {
	const scrollYVal = useSelector((state) => state.scrollReducer.scrollY, shallowEqual);
	const jobSwitchData = useSelector((state) => state.jobSwitchReducers.data, shallowEqual);

	//dispatch
	const dispatch = useDispatch();

	const scrollYActionCall = useCallback((payload) => dispatch(scrollYAction(payload)), [dispatch]);
	const jobSwitchActionCall = useCallback((id) => dispatch(jobSwitchAction(id)), [dispatch]);

	return {
		scrollYVal,
		jobSwitchData,
		scrollYActionCall,
		jobSwitchActionCall,
	};
};

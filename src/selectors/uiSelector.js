import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback } from "react";
import { scrollYAction } from "../actions/scrollAction";

export const useUiSelector = () => {
	const scrollYVal = useSelector((state) => state.scrollReducer.scrollY, shallowEqual);

	//dispatch
	const dispatch = useDispatch();

	const scrollYActionCall = useCallback((payload) => dispatch(scrollYAction(payload)), [dispatch]);

	return {
		scrollYVal,
		scrollYActionCall,
	};
};

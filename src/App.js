import { useEffect } from "react";
import Aos from "aos";

import { useUiSelector } from "./selectors/uiSelector";
import "./App.css";
import JobPages from "./views/jobPages";
import Home from "./views/home";
import { Route, Routes } from "react-router-dom";

const App = () => {
	const { scrollYActionCall } = useUiSelector();

	useEffect(() => {
		Aos.init({
			offset: 120,
		});
	}, []);

	const handleScroll = () => {
		scrollYActionCall(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/jobs" element={<JobPages />}></Route>
			</Routes>
		</div>
	);
};

export default App;

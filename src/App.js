import { useEffect } from "react";
import Aos from "aos";
import Header from "./views/header";
import HeroSection from "./views/heroSection";
import AboutSection from "./views/aboutSection";
import WhyUsSection from "./views/whyUsSection";
import TeamSection from "./views/teamsSection";
import ContactSection from "./views/contactSection";
import { useUiSelector } from "./selectors/uiSelector";
import "./App.css";
import ServiceSection from "./views/serviceSection";

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
			<Header />
			<HeroSection />
			<AboutSection />
			<WhyUsSection />
			<ServiceSection />
			<TeamSection />
			<ContactSection />
		</div>
	);
};

export default App;

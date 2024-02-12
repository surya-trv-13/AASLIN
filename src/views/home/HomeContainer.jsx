import React from "react";
import Header from "../header";
import HeroSection from "../heroSection";
import AboutSection from "../aboutSection";
import WhyUsSection from "../whyUsSection";
import ServiceSection from "../serviceSection";
import TeamSection from "../teamsSection";
import ContactSection from "../contactSection";

const HomeContainer = () => {
	return (
		<>
			<Header showRightComponent />
			<HeroSection />
			<AboutSection />
			<WhyUsSection />
			<ServiceSection />
			<TeamSection />
			<ContactSection />
		</>
	);
};

export default HomeContainer;

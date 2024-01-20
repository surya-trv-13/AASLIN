import React from "react";
import { Container } from "react-bootstrap";
import SectionTitleComponent from "../../components/utilComponent/sectionTitle/SectionTitleComponent";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import "./aboutSection.css";

const AboutContainer = () => {
	return (
		<section id="about" className="about">
			<Container data-aos="fade-up">
				<SectionTitleComponent title="About" />
				<AboutComponent />
			</Container>
		</section>
	);
};

export default AboutContainer;

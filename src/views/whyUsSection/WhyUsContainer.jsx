import React from "react";
import { Container, Row } from "react-bootstrap";
import "./whyUsSection.css";
import WhyComponent from "../../components/whyUsComponent/WhyComponent";
import WhyUsIllustration from "../../components/whyUsComponent/WhyUsIllustration";

const WhyUsContainer = () => {
	return (
		<section id="why-us" className="section-bg why-us">
			<Container className="container-fluid" data-aos="fade-up">
				<Row>
					<WhyComponent />
					<WhyUsIllustration />
				</Row>
			</Container>
		</section>
	);
};

export default WhyUsContainer;

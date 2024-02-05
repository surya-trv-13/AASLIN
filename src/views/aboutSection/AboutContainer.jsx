import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import CurvedTopDesign from "../../components/aboutComponent/CurvedTopDesign";
import AboutDetails from "../../components/aboutComponent/AboutDetails";
import "./aboutSection.css";

const AboutContainer = () => {
	return (
		<section id="about" className="about position-relative">
			<CurvedTopDesign />
			<Container data-aos="fade-up" className="negative-marginTop">
				<Row>
					<Col lg={7}>
						<AboutDetails />
					</Col>
					<Col lg={5} className="content pt-4 pt-lg-0">
						<AboutComponent />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AboutContainer;

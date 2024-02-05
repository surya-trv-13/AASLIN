import React from "react";
import { Col, Row } from "react-bootstrap";
import AboutDetailCard from "./AboutDetailCard";

const AboutDetails = () => {
	return (
		<Row className="align-items-center detailsSection">
			<Col lg={6}>
				<AboutDetailCard />
				<AboutDetailCard />
			</Col>
			<Col lg={6}>
				<AboutDetailCard />
			</Col>
		</Row>
	);
};

export default AboutDetails;

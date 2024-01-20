import React from "react";
import { Col } from "react-bootstrap";

const CompanyDetails = () => {
	return (
		<Col
			lg={6}
			className="d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
			data-aos="fade-up"
			data-aos-delay="500"
		>
			<h1>Driving Digital Excellence: Transforming Ideas into Innovation.</h1>
			<h2>We are team of talented software engineers focusing on digital excellence.</h2>
			<div className="d-flex justify-content-center justify-content-lg-start">
				<a href="#about" className="btn-get-started scrollto">
					About us
				</a>
			</div>
		</Col>
	);
};

export default CompanyDetails;

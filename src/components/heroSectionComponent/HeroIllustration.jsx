import React from "react";
import { Col } from "react-bootstrap";
import heroImg from "../../static/images/hero-img.png";

const HeroIllustration = () => {
	return (
		<Col
			lg={6}
			className="order-1 order-lg-2 hero-img"
			data-aos="zoom-in"
			data-aos-delay="500"
			data-aos-offset="300"
		>
			<img src={heroImg} className="img-fluid animated" alt="" />
		</Col>
	);
};

export default HeroIllustration;

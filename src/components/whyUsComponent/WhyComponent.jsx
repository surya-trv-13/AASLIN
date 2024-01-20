import React from "react";
import { Col } from "react-bootstrap";
import AccordionComponent from "./AccordionComponent";

const WhyComponent = () => {
	return (
		<Col
			lg={7}
			className="d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"
		>
			<div className="content">
				<h3>
					Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong>
				</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
				</p>
			</div>
			<AccordionComponent />
		</Col>
	);
};

export default WhyComponent;

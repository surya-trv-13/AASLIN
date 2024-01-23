import React from "react";
import { Col, Row } from "react-bootstrap";
import CheckDoubleLineIcon from "remixicon-react/CheckDoubleLineIcon";

const AboutComponent = () => {
	return (
		<Row className="content">
			<Col lg={6}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
				<ul>
					<li>
						<CheckDoubleLineIcon color="#47b2e4" /> Ullamco laboris nisi ut aliquip ex ea commodo
						consequat
					</li>
					<li>
						<CheckDoubleLineIcon color="#47b2e4" /> Duis aute irure dolor in reprehenderit in
						voluptate velit
					</li>
					<li>
						<CheckDoubleLineIcon color="#47b2e4" /> Ullamco laboris nisi ut aliquip ex ea commodo
						consequat
					</li>
				</ul>
			</Col>
			<Col lg={6} className="pt-4 pt-lg-0">
				<p>
					In a world marked by rapid technological advancements, dynamic economic shifts, and a
					constantly changing global landscape, navigating these transformations poses a
					considerable challenge for our people, clients, partners, and communities. At AASLIN
					Technologies, we are dedicated to pushing the limits of what is achievable. Drawing on our
					expertise, experience, and innovative ecosystem, we empower enterprises, individuals, and
					communities to forge a better future at an accelerated pace. Together, we strive to
					overcome obstacles by driving business transformation through our strengths—technology,
					talent, and a robust network of partners. Our unwavering commitment is directed towards a
					singular objective: ensuring that our clients achieve their future sustainable selves well
					ahead of schedule.
				</p>
				<a href="#hero" className="btn-learn-more">
					Learn More
				</a>
			</Col>
		</Row>
	);
};

export default AboutComponent;

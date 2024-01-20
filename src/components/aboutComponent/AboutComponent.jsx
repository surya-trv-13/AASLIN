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
					The world is evolving rapidly with transformative technological advancements, dynamic
					changes in economies, and a shifting global landscape. These changes make it challenging
					for our people, clients, partners, and communities to navigate the evolving landscape. At
					LTIMindtree, we constantly push the boundaries of what’s possible by leveraging our
					expertise, experience, and innovative ecosystem to empower enterprises, people, and
					communities to build a better Future, Faster. Together. To achieve this, we drive business
					transformation using what we are good at—technology, talent, and a robust ecosystem of
					partners—to eliminate all barriers to progress. Our commitment is to a singular goal: to
					relentlessly ensure our clients become their future sustainable selves ahead of schedule.
				</p>
				<a href="#hero" className="btn-learn-more">
					Learn More
				</a>
			</Col>
		</Row>
	);
};

export default AboutComponent;

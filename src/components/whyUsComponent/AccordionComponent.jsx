import React from "react";
import { Accordion, AccordionHeader } from "react-bootstrap";
import whyUsData from "../../utils/data/whyUs.json";
import "./whyUsComponent.css";

const AccordionComponent = () => {
	return (
		<div className="content">
			<Accordion defaultActiveKey={0}>
				{whyUsData.map((data, index) => (
					<Accordion.Item eventKey={index} key={data.id}>
						<AccordionHeader>
							<span id="accordionListSpan">{data.id}</span> {data.header}
						</AccordionHeader>
						<Accordion.Body>{data.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		</div>
	);
};

export default AccordionComponent;

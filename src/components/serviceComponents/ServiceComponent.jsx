import React from "react";
import { Col, Row } from "react-bootstrap";
import servicesData from "../../utils/data/services.json";
import ServiceBox from "./ServiceBox";

const ServiceComponent = () => {
	return (
		<Row>
			{servicesData.map((service) => (
				<Col xl={3} md={6} className="d-flex align-items-stretch mt-4 mt-xl-0" key={service?.id}>
					<ServiceBox service={service} />
				</Col>
			))}
		</Row>
	);
};

export default ServiceComponent;

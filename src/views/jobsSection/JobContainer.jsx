import React from "react";
import { Col, Row } from "react-bootstrap";
import JobsLists from "../../components/jobsComponent/JobsLists";
import "./jobSection.css";
import JobDetails from "../../components/jobsComponent/JobDetails";

const JobContainer = () => {
	return (
		<div className="job">
			<Row className="row-job">
				<Col lg={5} md={12} sm={12}>
					<JobsLists />
				</Col>
				<Col lg={7} md={12} sm={12}>
					<JobDetails />
				</Col>
			</Row>
		</div>
	);
};

export default JobContainer;

import React from "react";
import { Col, Row } from "react-bootstrap";
import JobsLists from "../../components/jobsComponent/JobsLists";
import JobDetails from "../../components/jobsComponent/JobDetails";
import CurvedBackDesign from "../../components/jobsComponent/CurvedBackDesign";
import "./jobSection.css";

const JobContainer = () => {
	return (
		<div className="job">
			<CurvedBackDesign />
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

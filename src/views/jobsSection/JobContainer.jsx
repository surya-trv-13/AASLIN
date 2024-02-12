import React from "react";
import JobsLists from "../../components/jobsComponent/JobsLists";
import JobDetails from "../../components/jobsComponent/JobDetails";
import CurvedBackDesign from "../../components/jobsComponent/CurvedBackDesign";
import "./jobSection.css";
import SectionTitleComponent from "../../components/utilComponent/sectionTitle/SectionTitleComponent";
import { ArrowLeft } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const JobContainer = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};

	return (
		<div className="job">
			<CurvedBackDesign />
			<Row className="job-page-header">
				<Col xs={1}>
					<ArrowLeft size={30} onClick={handleClick} className="arrow-back" />
				</Col>
				<Col xs={11}>
					<SectionTitleComponent title="Careers" />
				</Col>
			</Row>
			<div className="row-job">
				<JobsLists />
				<JobDetails />
			</div>
		</div>
	);
};

export default JobContainer;

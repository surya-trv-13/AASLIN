import React from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import { useUiSelector } from "../../selectors/uiSelector";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import ApplyDialog from "./ApplyDialog";

const JobDetails = () => {
	const { jobSwitchData } = useUiSelector();
	return (
		<div className="job-details">
			<ApplyDialog jobTitle={jobSwitchData?.designation} />
			<h2>{jobSwitchData?.designation}</h2>
			<Row className="job-action">
				<Col lg={8}>
					<h4>{jobSwitchData?.location}</h4>
					<h5>{jobSwitchData?.id}</h5>
					<p>
						{" "}
						{Math.floor(
							(new Date() - new Date(jobSwitchData?.dateOfPost)) / (24 * 60 * 60 * 1000)
						)}{" "}
						days ago
					</p>
				</Col>
				<Col lg={4} className="d-flex justify-content-end align-items-center">
					<Button className="apply-btn">
						<BoxArrowUpRight className="apply-btn-icon" />
						Apply
					</Button>
				</Col>
			</Row>
			<hr></hr>
			<h3>About the Job</h3>
			{jobSwitchData?.jobResponsibilities && jobSwitchData?.jobResponsibilities.length > 0 && (
				<>
					<h4>Job Responsibilities</h4>
					<p>
						<ul>
							{jobSwitchData?.jobResponsibilities.map((responsibility) => (
								<li>{responsibility}</li>
							))}
						</ul>
					</p>
				</>
			)}
			{jobSwitchData?.jobRequirements && jobSwitchData?.jobRequirements.length > 0 && (
				<>
					<h4>Job Requirements</h4>
					<p>
						<ul>
							{jobSwitchData?.jobRequirements.map((requirement) => (
								<li>{requirement}</li>
							))}
						</ul>
					</p>
				</>
			)}

			{jobSwitchData?.advantages && jobSwitchData?.advantages.length > 0 && (
				<>
					<h4>Advantage</h4>
					<p>
						<ul>
							{jobSwitchData?.advantages.map((advantage) => (
								<li>{advantage}</li>
							))}
						</ul>
					</p>
				</>
			)}
			{jobSwitchData?.skills && jobSwitchData?.skills.length > 0 && (
				<>
					<h4>Desired Skills and Experience</h4>
					<div>
						{jobSwitchData?.skills.map((skill) => (
							<Badge pill bg="info" className="skill-badge">
								{skill}
							</Badge>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default JobDetails;

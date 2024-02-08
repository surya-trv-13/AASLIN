import React from "react";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";

const JobDetails = () => {
	return (
		<div className="job-details">
			<h2>Senior Software Developer</h2>
			<Row className="job-action">
				<Col lg={8}>
					<h4>Visakhapatnam</h4>
					<p> 3 days ago</p>
				</Col>
				<Col lg={4} className="d-flex justify-content-end align-items-center">
					<Button>Apply</Button>
				</Col>
			</Row>
			<hr></hr>
			<h3>About the Job</h3>
			<h4>Job Responsibilities</h4>
			<p>
				• Design and develop high-volume, low-latency applications for mission-critical systems and
				deliver high availability and performance.
				<br /> • Contributing to all phases of the development lifecycle
				<br /> • Write well-designed, testable, efficient code and improve the quality of the code.
				<br /> • Analyse business requirements and create technical design documents that are per
				the company's architecture standards.
				<br /> • Develop the code and provide hands-on engineering expertise to the development
				teams. <br />• Manage UAT User Queries & coordinate UAT Activities so that UAT can be
				completed timely. <br />• Ensures that expected application performance levels are achieved.{" "}
				<br />• Perform unit and system testing of application code as well as execution of
				implementation activities.
				<br /> • Record and track defects uncovered during the execution of tests and escalate the
				status of the issue to project management and update the teams on items of impact and
				participation in resolution; design retest cases/scripts/data to retest. <br />• Review the
				code and enhance the system & performance. <br />• Involves in performance enhancement
				analysis.
			</p>
			<h4>Job Requirements</h4>
			<p>
				• Bachelor’s degree in computer science or a related field or a combination of related
				experience and education • At least 5 years of proven working experience in Java development
				• Expert-level programming skills in Java • Preferably with strong knowledge of
				Microservices architectures, hands-on experience in developing and deploying Microservices
				solutions, containerization, Docker and Kubernetes • Experience in using Java Spring Boot
				framework, RESTful APIs using JAX-RS, JSON, Angular, JPA/Hibernate, Bean Validation, Google
				GWT and experience with development in Android and IOS is a plus. • Experience in using
				source code management GIT and building tools like Ant, Maven and Gradle. • Excellent
				problem-solving/troubleshooting skills in Java/J2EE technologies • Strong background working
				with Linux/UNIX environments. • Good written and verbal communication skills
			</p>
			<h4>Desired Skills and Experience</h4>
			<Stack direction="horizontal" gap={2}>
				<Badge pill bg="info">
					JSON
				</Badge>
				<Badge pill bg="info">
					Sping Boot
				</Badge>
				<Badge pill bg="info">
					Performance Enhancements
				</Badge>
				<Badge pill bg="info">
					Kubernetes
				</Badge>
				<Badge pill bg="info">
					JavaScript
				</Badge>
				<Badge pill bg="info">
					Maven
				</Badge>
				<Badge pill bg="info">
					Docker
				</Badge>
				<Badge pill bg="info">
					Angular
				</Badge>
			</Stack>
		</div>
	);
};

export default JobDetails;

import React from "react";
import { Container, Row } from "react-bootstrap";
import "./heroSection.css";
import CompanyDetails from "../../components/heroSectionComponent/CompanyDetails";
import HeroIllustration from "../../components/heroSectionComponent/HeroIllustration";

const HeroContainer = () => {
	return (
		<section className="d-flex align-items-center" id="hero">
			<Container>
				<Row>
					<CompanyDetails />
					<HeroIllustration />
				</Row>
			</Container>
		</section>
	);
};

export default HeroContainer;

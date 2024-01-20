import React from "react";
import { Container } from "react-bootstrap";
import SectionTitleComponent from "../../components/utilComponent/sectionTitle/SectionTitleComponent";
import TeamComponent from "../../components/teamComponent/TeamComponent";
import "./teamsSection.css";

const TeamsContainer = () => {
	return (
		<section id="team" className="team  section-bg">
			<Container data-aos="fade-up">
				<SectionTitleComponent
					title="Teams"
					paragraph="
							Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
							quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
							impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
						"
				/>
				<TeamComponent />
			</Container>
		</section>
	);
};

export default TeamsContainer;

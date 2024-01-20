import React from "react";
import teamMemberData from "../../utils/data/teamMember.json";
import { Row } from "react-bootstrap";
import MemberCard from "./MemberCard";

const TeamComponent = () => {
	return (
		<Row className="container-fluid">
			{teamMemberData &&
				teamMemberData.map((member, index) => (
					<MemberCard memberData={member} key={member.id} delay={100 * (index + 1)} />
				))}
		</Row>
	);
};

export default TeamComponent;

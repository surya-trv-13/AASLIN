import React from "react";
import JobSection from "../jobsSection";
import Header from "../header";

const JobPagesContainer = () => {
	return (
		<>
			<Header showRightComponent={false} />
			<JobSection />
		</>
	);
};

export default JobPagesContainer;

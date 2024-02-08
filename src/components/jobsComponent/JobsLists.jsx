import React from "react";
import JobListDetails from "./JobListDetails";
import jobDetails from "../../utils/data/jobs.json";

const JobsLists = () => {
	return (
		<div>
			{jobDetails.map((jobDetail) => (
				<JobListDetails
					designation={jobDetail.designation}
					days={Math.floor((new Date() - new Date(jobDetail.dateOfPost)) / (24 * 60 * 60 * 1000))}
					location={jobDetail.location}
				/>
			))}
		</div>
	);
};

export default JobsLists;

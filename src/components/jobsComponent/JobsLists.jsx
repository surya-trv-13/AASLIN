import React from "react";
import JobListDetails from "./JobListDetails";
import jobDetails from "../../utils/data/jobs.json";

const JobsLists = () => {
	return (
		<div className="job-list">
			{jobDetails.map((jobDetail) => (
				<JobListDetails key={jobDetail.id} jobData={jobDetail} />
			))}
		</div>
	);
};

export default JobsLists;

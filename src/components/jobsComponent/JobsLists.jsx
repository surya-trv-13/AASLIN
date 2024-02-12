import React, { useEffect } from "react";
import JobListDetails from "./JobListDetails";
import jobDetails from "../../utils/data/jobs.json";
import { useUiSelector } from "../../selectors/uiSelector";

const JobsLists = () => {
	const { jobSwitchActionCall } = useUiSelector();
	useEffect(() => {
		if (jobDetails.length > 0) jobSwitchActionCall(jobDetails[0]?.id);
	}, []);

	return (
		<div className="job-list">
			{jobDetails.map((jobDetail) => (
				<JobListDetails key={jobDetail.id} jobData={jobDetail} />
			))}
		</div>
	);
};

export default JobsLists;

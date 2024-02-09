import React from "react";
import { useUiSelector } from "../../selectors/uiSelector";
import PropTypes from "prop-types";

const propTypes = {
	jobData: PropTypes.object,
};

const JobListDetails = ({ jobData }) => {
	const { jobSwitchActionCall } = useUiSelector();
	const handleClick = () => {
		jobSwitchActionCall(jobData?.id);
	};

	return (
		<div className="list-box" onClick={handleClick}>
			<div className="desg-box">
				<h3>{jobData?.designation}</h3>
				<p>
					{Math.floor((new Date() - new Date(jobData?.dateOfPost)) / (24 * 60 * 60 * 1000))} days
					ago
				</p>
			</div>
			<h4>{jobData?.location}</h4>
		</div>
	);
};

JobListDetails.propTypes = propTypes;
export default JobListDetails;

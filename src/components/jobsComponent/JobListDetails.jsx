import React from "react";

const JobListDetails = ({ designation, days, location }) => {
	const handleClick = () => {
		console.log(designation);
	};

	return (
		<div className="list-box" onClick={handleClick}>
			<div className="desg-box">
				<h3>{designation}</h3>
				<p>{days} days ago</p>
			</div>
			<h4>{location}</h4>
		</div>
	);
};

export default JobListDetails;

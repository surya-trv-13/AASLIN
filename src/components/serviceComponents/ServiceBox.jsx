import React from "react";
import * as Icons from "react-bootstrap-icons";
import PropTypes from "prop-types";

const propTypes = {
	service: PropTypes.object.isRequired,
};

const ServiceBox = ({ service }) => {
	// const { [service?.icon]: Icon } = Icons;
	return (
		<div class="icon-box">
			<div class="icon">
				<Icons.Dribbble className="iconLogo" color="#47b2e4" size={36} />
			</div>
			<h4>
				<p>{service?.name}</p>
			</h4>
			<p>{service?.description}</p>
		</div>
	);
};

ServiceBox.propTypes = propTypes;
export default ServiceBox;

import React from "react";
import PropTypes from "prop-types";
import "./sectionTitle.css";

const propTypes = {
	title: PropTypes.string.isRequired,
	paragraph: PropTypes.string,
};

const defaultProps = {
	paragraph: "",
};

const SectionTitleComponent = ({ title, paragraph }) => {
	return (
		<div className="section-title">
			<h2>{title}</h2>
			<p>{paragraph}</p>
		</div>
	);
};

SectionTitleComponent.propTypes = propTypes;
SectionTitleComponent.defaultProps = defaultProps;

export default SectionTitleComponent;

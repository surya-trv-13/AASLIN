import React from "react";
import NavbarHeader from "../../components/headerComponent/NavbarHeader";
import "./header.css";
import PropTypes from "prop-types";

const propTypes = {
	showRightComponent: PropTypes.bool,
};

const HeaderContainer = ({ showRightComponent }) => {
	return (
		<header id="header" className="fixed-top">
			<NavbarHeader showRightComponent={showRightComponent} />
		</header>
	);
};

HeaderContainer.propTypes = propTypes;

export default HeaderContainer;

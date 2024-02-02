import React from "react";
import NavbarHeader from "../../components/headerComponent/NavbarHeader";
import "./header.css";

const HeaderContainer = () => {
	return (
		<header id="header" className="fixed-top">
			<NavbarHeader />
		</header>
	);
};

export default HeaderContainer;

import React, { useEffect } from "react";
import NavbarHeader from "../../components/headerComponent/NavbarHeader";
import "./header.css";
import { useUiSelector } from "./../../selectors/uiSelector";

const HeaderContainer = () => {
	return (
		<header id="header" className="fixed-top">
			<div className="container d-flex align-items-center">
				<NavbarHeader />
			</div>
		</header>
	);
};

export default HeaderContainer;

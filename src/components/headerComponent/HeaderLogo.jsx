import React from "react";
import logoImage from "../../static/images/logo.png";
import styles from "./headerComponent.module.css";

const HeaderLogo = ({ textColor }) => {
	return (
		<div className="d-flex align-items-center">
			<div className={styles.navBarLogoBox}>
				<img className={styles.navBarLogo} src={logoImage} alt="ATPL" />
			</div>
			<div style={{ float: "right", marginLeft: "8px" }}>
				<h3 style={{ color: textColor }} className={styles.cname}>
					AASLIN Technologies
				</h3>
				<h5 style={{ color: textColor }}>Private Limited</h5>
			</div>
		</div>
	);
};

export default HeaderLogo;

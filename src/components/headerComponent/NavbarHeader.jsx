import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import HeaderLogo from "./HeaderLogo";
import { useUiSelector } from "../../selectors/uiSelector";

const NavbarHeader = () => {
	const { scrollYVal } = useUiSelector();
	const scrollToTopSection = (sectionId) => {
		const navbarHeight = document.querySelector(".navbar").offsetHeight;
		const section = document.getElementById(sectionId);

		if (section) {
			window.scrollTo({
				top: section.offsetTop - navbarHeight,
				behavior: "smooth",
			});
		}
	};

	return (
		<Navbar fixed="top" expand="lg" className={scrollYVal > 100 ? "stickyScroll" : "loadScreen"}>
			<Container>
				<Navbar.Brand href="#">
					<HeaderLogo textColor={scrollYVal > 100 ? "#FFFFFF" : "#CCCCCC"} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="nav-responsive" />
				<Navbar.Collapse id="nav-responsive">
					<Nav className="justify-content-end flex-grow-1 pe-3">
						<Nav.Link onClick={() => scrollToTopSection("hero")}>Home</Nav.Link>
						<Nav.Link onClick={() => scrollToTopSection("about")}>About</Nav.Link>
						<Nav.Link onClick={() => scrollToTopSection("team")}>Teams</Nav.Link>
						<Nav.Link onClick={() => scrollToTopSection("contact")}>Contact Us</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarHeader;

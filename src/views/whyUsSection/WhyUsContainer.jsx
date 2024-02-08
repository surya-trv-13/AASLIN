import React from "react";
import { Container, Row } from "react-bootstrap";
import "./whyUsSection.css";
import WhyComponent from "../../components/whyUsComponent/WhyComponent";
import WhyUsIllustration from "../../components/whyUsComponent/WhyUsIllustration";

const WhyUsContainer = () => {
	return (
		<section id="why-us" className="section-bg why-us position-relative">
			{/* <svg
				class="custom-section-curved-top-2"
				width="100%"
				height="298"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="svg_3"
					d="m-79.33393,-38.33344c20.00001,16.00001 346.66686,448.00024 826.66712,236.00013c240.00013,-106.00006 647.58388,-25.45831 786.45913,6.2709c138.87524,31.72921 295.36054,26.21434 359.54203,2.72919c64.18149,-23.48515 718.67317,-158.11072 742.33982,-143.77728c214.66852,222.83259 61.00168,333.66623 77.22357,376.2222c16.22188,42.55598 -2796.23167,-33.44489 -2795.56445,-33.77815c-0.33361,0.16663 -0.83375,-98.08344 -1.16708,-196.41683c-0.33334,-98.33338 -0.49987,-196.75009 -0.16626,-196.91671"
					stroke-width="0"
					stroke="#000"
					fill="#e9f6ff"
				/>
			</svg> */}
			<Container className="container-fluid custom-container" data-aos="fade-up">
				<Row>
					<WhyComponent />
					<WhyUsIllustration />
				</Row>
			</Container>
		</section>
	);
};

export default WhyUsContainer;

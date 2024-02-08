import React from "react";
import { Container } from "react-bootstrap";
import SectionTitleComponent from "../../components/utilComponent/sectionTitle/SectionTitleComponent";
import ServiceComponent from "../../components/serviceComponents/ServiceComponent";
import "./serviceSection.css";

const ServiceContainer = () => {
	return (
		<section id="services" class="services position-relative">
			<svg
				class="custom-section-curved-top-4"
				width="100%"
				height="298"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="svg_2"
					fill="#ffffff"
					stroke="#000"
					stroke-width="0"
					d="m-16.68437,95.44889c0,0 5.33335,176.00075 660.00283,93.33373c327.33474,-41.33351 503.33549,15.3334 639.00274,35.66682c135.66725,20.33342 59.66691,9.66671 358.33487,28.33346c298.66795,18.66676 268.66829,-45.00088 382.66831,-112.00048c114.00002,-66.9996 718.31698,-59.48704 1221.66946,95.563c503.35248,155.05004 -221.83202,184.10564 -243.66935,197.60521c-21.83733,13.49958 -3008.67549,-19.83371 -3008.00467,-20.83335c-0.67082,0.99964 -30.00428,-232.33469 -10.00419,-317.66839z"
					class="svg-fill-color-quaternary"
				/>
			</svg>
			<Container data-aos="fade-up">
				<SectionTitleComponent
					title="Services"
					paragraph="
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
						quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
						impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
				/>
				<ServiceComponent />
			</Container>
		</section>
	);
};

export default ServiceContainer;

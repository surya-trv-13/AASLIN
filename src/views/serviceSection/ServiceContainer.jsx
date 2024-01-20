import React from "react";
import { Container } from "react-bootstrap";
import SectionTitleComponent from "../../components/utilComponent/sectionTitle/SectionTitleComponent";
import ServiceComponent from "../../components/serviceComponents/ServiceComponent";
import "./serviceSection.css";

const ServiceContainer = () => {
	return (
		<section id="services" class="services">
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

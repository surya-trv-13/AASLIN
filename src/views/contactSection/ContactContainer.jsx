import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitleComponent from "./../../components/utilComponent/sectionTitle/SectionTitleComponent";
import AddressBox from "../../components/contactComponent/AddressBox";
import ContactForm from "../../components/contactComponent/ContactForm";
import "./contactSection.css";

const ContactContainer = () => {
	return (
		<section id="contact" className="contact">
			<Container data-aos="fade-up">
				<SectionTitleComponent
					title="Contact"
					paragraph="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
							quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
							impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
				/>
				<Row>
					<AddressBox />
					<ContactForm />
				</Row>
			</Container>
		</section>
	);
};

export default ContactContainer;

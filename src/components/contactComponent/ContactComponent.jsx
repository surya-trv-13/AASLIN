import React from "react";
import { Row } from "react-bootstrap";
import AddressBox from "./AddressBox";
import ContactForm from "./ContactForm";

const ContactComponent = () => {
	return (
		<Row>
			<AddressBox />
			<ContactForm />
		</Row>
	);
};

export default ContactComponent;

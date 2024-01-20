import React from "react";
import { Col } from "react-bootstrap";
import { Clock, GeoAlt } from "react-bootstrap-icons";

const AddressBox = () => {
	return (
		<Col lg={5} className="d-flex align-items-stretch">
			<div className="info">
				<div className="address">
					<span className="contactIcon">
						<GeoAlt size={20} />
					</span>
					<h4>Location:</h4>
					<p>AASLIN Technologies Private Limited</p>
					<p className="cah4">
						Plot No. 4-51-7, 2nd & 3rd Floor,
						<br /> Pavan Adithya, Post officeRd.,
						<br />
						Lawsons bay colony, Pedda Waltair,
						<br /> Visakhapatnam - 530017
					</p>
				</div>

				<div className="timing">
					<span className="contactIcon">
						<Clock size={20} />
					</span>
					<h4>Timings</h4>
					<p style={{ margin: "5px", fontWeight: 500 }}>
						Monday - Friday
						<br /> 8:00 AM - 5:30 PM
					</p>
				</div>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950.0570533768598!2d83.33739822913667!3d17.733882976619782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394518e7640fe3%3A0xa99fe99ae969d05b!2sAASLIN%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1651552879192!5m2!1sen!2sin"
					frameBorder="0"
					style={{ border: 0, width: "100%", height: "290px" }}
					allowFullScreen
					title="Aaslin Office"
				></iframe>
			</div>
		</Col>
	);
};

export default AddressBox;

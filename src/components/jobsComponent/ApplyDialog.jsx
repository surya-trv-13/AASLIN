import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const propTypes = {
	jobTitle: PropTypes.string.isRequired,
};

const ApplyDialog = ({ jobTitle }) => {
	const [showWin, setShowWin] = useState(true);

	return (
		<Modal size="lg" centered show={showWin} onHide={() => setShowWin(false)}>
			<Modal.Header closeButton>Apply for {jobTitle}</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
							<Form.Control type="name" placeholder="firstname lastname" />
						</FloatingLabel>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
							<Form.Control type="email" placeholder="name@example.com" />
						</FloatingLabel>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button>Submit</Button>
			</Modal.Footer>
		</Modal>
	);
};

ApplyDialog.propTypes = propTypes;
export default ApplyDialog;

import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useUiSelector } from "../../selectors/uiSelector";

const propTypes = {
	jobTitle: PropTypes.string.isRequired,
};

const ApplyDialog = ({ jobTitle }) => {
	const { isOpenApplyWindow, openApplyWindow } = useUiSelector();

	const handleCloseWindow = () => {
		openApplyWindow(false);
	};

	return (
		<Modal size="lg" centered show={isOpenApplyWindow} onHide={handleCloseWindow}>
			<Modal.Header closeButton>
				<h3>
					Apply for <b>{jobTitle}</b>
				</h3>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Name</Form.Label>
						<Form.Control type="name" placeholder="firstname lastname" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>
					<Form.Group></Form.Group>
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Resume</Form.Label>
						<Form.Control type="file" />
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

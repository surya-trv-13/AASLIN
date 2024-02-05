import React from "react";
import Focus2LineIcon from "remixicon-react/Focus2LineIcon";

const AboutDetailCard = () => {
	return (
		<div className="card custom-about-box">
			<div className="custom-card-body text-center">
				<div className="animated fadeIn pb-2 mb-2">
					<Focus2LineIcon className="aboutIcon" size={40} />
				</div>
				<h4 className="text-color-dark font-weight-semibold mb-2">Lorem Ipsum</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci.Eum ipsam
					laborum deleniti velit pariatur architecto aut nihil
				</p>
			</div>
		</div>
	);
};

export default AboutDetailCard;

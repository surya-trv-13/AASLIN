import React from "react";
import { Col } from "react-bootstrap";
import TwitterXFillIcon from "remixicon-react/TwitterFillIcon";
import InstagramFillIcon from "remixicon-react/InstagramFillIcon";
import FacebookFillIcon from "remixicon-react/FacebookBoxFillIcon";
import LinkedInFillIcon from "remixicon-react/LinkedinBoxFillIcon";
// import imagePic from "";

const MemberCard = ({ memberData, delay }) => {
	const { name, designation, pic, desc, socialLink } = memberData;
	return (
		<Col lg={6} data-aos="zoom-in" data-aos-delay={delay}>
			<div className="member row d-flex justify-content-center align-items-start">
				<div className="pic col-lg-5 flex-column justify-content-center align-items-stretch order-1">
					<img src={require(`../../static/images/team/${pic}`)} className="img-fluid" alt="" />
				</div>
				<div className="member-info col-lg-7 flex-column justify-content-center align-items-stretch order-2">
					<h4>{name}</h4>
					<span>{designation}</span>
					<p>{desc}</p>
					<div className="social">
						{socialLink?.twitter ? (
							<a href={socialLink?.twitter}>
								<TwitterXFillIcon className="socialIcon"></TwitterXFillIcon>
							</a>
						) : (
							""
						)}
						{socialLink?.facebook ? (
							<a href={socialLink?.facebook}>
								<FacebookFillIcon className="socialIcon"></FacebookFillIcon>
							</a>
						) : (
							""
						)}

						{socialLink?.instagram ? (
							<a href={socialLink?.instagram}>
								<InstagramFillIcon className="socialIcon"></InstagramFillIcon>
							</a>
						) : (
							""
						)}
						{socialLink?.linkedin ? (
							<a href={socialLink?.linkedin}>
								<LinkedInFillIcon className="socialIcon"></LinkedInFillIcon>
							</a>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</Col>
	);
};

export default MemberCard;

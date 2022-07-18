import Image from 'next/image';
import React from 'react';
import fb from '../public/icon-facebook.svg';
import tw from '../public/icon-twitter.svg';
import pt from '../public/icon-pinterest.svg';
import ins from '../public/icon-instagram.svg';
import styled from 'styled-components';

const FootSection = styled.section`
	background-color: #232127;
	color: #fff;
	display: flex;
	justify-content: space-evenly;
	padding: 4.2rem 5rem 4.2rem 4.5rem;

	.title_logo {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.foot_link {
		font-size: 0.9rem;
	}
	.foot_link > p {
		cursor: pointer;
		color: #999;
		font-size: 0.9rem;
		margin: 0.85rem 0;
		&:hover {
			color: #2acfcf;
		}
	}
	.logos {
		width: 110px;
		display: flex;
		justify-content: space-between;
	}

	.logos > * :hover {
		color: #2acfcf;
		cursor: pointer;
	}

	.foot_title {
		font-family: 'Kanit', sans-serif;
		font-size: 2rem;
		margin-bottom: 1rem;
		letter-spacing: 0.05rem;
	}

	.logos_last {
		display: none;
	}

	@media screen and (max-width: 768px) {
		padding: 4rem 4rem 3rem 4rem;
		flex-direction: column;
		align-items: center;
		text-align: center;

		.logos {
			display: none;
		}
		.sec1,
		.sec2,
		.sec3 {
			margin: 0.5rem 0;
		}
		.logos_last {
			display: block;
			width: 150px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;
			margin-top: 1.2rem;

			.last {
				margin-left: 1rem;

				&:hover > path {
					fill: '#2acfcf';
				}
			}
		}
	}
`;

const Footer = () => {
	return (
		<FootSection>
			<div className="title_logo">
				<h2 className="foot_title">Shortly</h2>
				<div className="logos">
					<Image src={fb} alt="facebook last" />
					<Image src={tw} alt="twitter last" />
					<Image src={pt} alt="pinterest " />
					<Image src={ins} alt="instagram " />
				</div>
			</div>
			<div className="sec1 foot_link">
				<h4>Features</h4>
				<p>Link Shortening</p>
				<p>Branded Links</p>
				<p>Analytics</p>
			</div>
			<div className="sec2 foot_link">
				<h4>Resources</h4>
				<p>Blog</p>
				<p>Developers</p>
				<p>Support</p>
			</div>
			<div className="sec3 foot_link">
				<h4>Company</h4>
				<p>About</p>
				<p>Our Team</p>
				<p>Careers</p>
				<p>Contact</p>
			</div>
			<div className="logos_last">
				<Image src={fb} alt="facebook" id="last" />
				<Image src={tw} alt="twitter last" />
				<Image src={pt} alt="pinterest last" />
				<Image src={ins} alt="instagram last" />
			</div>
		</FootSection>
	);
};

export default Footer;

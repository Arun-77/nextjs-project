import React from 'react';
import styled from 'styled-components';
import people from '../public/HeroImg.png';
import Image from 'next/image';

export const StyledHero = styled.section`
	max-width: 1050px;
	padding: 1rem 2.2rem 0 2.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	margin: 0 auto;
	& h1 {
		margin: 0 auto 0.8rem auto;
		font-size: 5.6rem;
		max-width: 850px;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		line-height: 6.3rem;
		letter-spacing: 0.19rem;
	}
	@media screen and (max-width: 768px) {
		& h1 {
			font-size: 4.5rem;
			line-height: 5.2rem;
		}
	}
	@media screen and (max-width: 420px) {
		padding: 1.5rem 1.5rem 0 1.5rem;
		& h1 {
			font-size: 2.95rem;
			line-height: 3.8rem;
			letter-spacing: 0.1rem;
		}
	}
`;

const Hero = () => {
	return (
		<StyledHero>
			<h1>MORE THAN JUST SHORTER LINKS</h1>
			<Image
				id="linkInput"
				src={people}
				width="335"
				height="345"
				alt="Discussing People"
			/>
		</StyledHero>
	);
};

export default Hero;

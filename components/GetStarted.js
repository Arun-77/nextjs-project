import styled from 'styled-components';
import met from '../public/iconMeteor.svg';
import Image from 'next/image';

const BgSection = styled.section`
	max-width: 1500px;
	height: 200px;
	position: relative;
	margin: 0 auto;
	overflow: hidden;

	.startBg {
		width: 100%;
		height: 200px;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
	}

	.startContent {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #fff;
	}

	& button {
		font-weight: 700;
		color: #fff;
		background-color: #2acfcf;
		cursor: pointer;
		border: none;
		outline: none;
		padding: 0.9rem 2rem;
		border-radius: 100vw;
		margin-top: 0.8rem;
		font-size: 1.2rem;
		&:hover {
			background-color: #8ed8e5;
		}
	}
`;

const GetStarted = () => {
	const clickHandler = () => {
		window.location.replace('/#linkInput');
	};

	return (
		<BgSection>
			<Image src={met} alt="stat_Image" className="startBg" />
			<div className="startContent">
				<h2>Boost your links today</h2>
				<button onClick={clickHandler} type="button">
					Get Started
				</button>
			</div>
		</BgSection>
	);
};

export default GetStarted;

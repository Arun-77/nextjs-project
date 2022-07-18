import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig';
import { useState } from 'react';

const ThemeButton = styled.button`
	color: white;
	background-color: #2acfcf;
	padding: 0.6rem 0.8rem;
	display: inline-block;
	cursor: pointer;
	transition: background-color 0.5s ease;
	border: none;
	border-radius: 6px;
	font-size: 0.8rem;
	cursor: pointer;

	&:hover {
		background-color: #8ed8e5;
	}
`;

const StyledNav = styled.nav`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 5rem;
	height: 7rem;
	width: 100%;
	display: flex;
	align-items: center;
	& h2 {
		padding-right: 1.9rem;
		font-size: 2rem;
		font-family: 'Kanit', sans-serif;
		font-weight: 700;
	}
	.menu {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
	ul {
		display: flex;
		list-style-type: none;
	}
	.links {
		cursor: pointer;
		padding: 0 1rem;
		font-weight: 700;
	}

	.toggleBtn {
		display: none;
	}

	@media screen and (max-width: 768px) {
		padding: 0 3rem;

		.navBtns {
			display: flex;
		}

		.menu {
			justify-content: flex-end;
		}
		.menu ul {
			position: absolute;
			z-index: 3;
			top: 6.5rem;
			left: 0;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			transform: translateY(-300%);
			opacity: 0;
			transition: all 0.5s ease-out;
		}
		.links {
			margin: 1rem 0;
		}
		ul.linksOpen {
			transform: translateY(0);
			opacity: 1;
		}
		.toggleBtn {
			display: block;
			margin-left: 1.2rem;
			cursor: pointer;
		}
		.hamburger .line {
			width: 40px;
			height: 5px;
			background-color: #999;
			display: block;
			border-radius: 100vh;
			margin: 8px auto;
			-webkit-transition: all 0.3s ease-in-out;
			-o-transition: all 0.3s ease-in-out;
			transition: all 0.3s ease-in-out;
		}

		.hamburger:hover {
			cursor: pointer;
		}
		.hambars.is-active .line:nth-child(2) {
			opacity: 0;
		}
		.hambars.is-active .line:nth-child(1) {
			-webkit-transform: translateY(13px) rotate(45deg);
			-ms-transform: translateY(13px) rotate(45deg);
			-o-transform: translateY(13px) rotate(45deg);
			transform: translateY(13px) rotate(45deg);
		}

		.hambars.is-active .line:nth-child(3) {
			-webkit-transform: translateY(-13px) rotate(-45deg);
			-ms-transform: translateY(-13px) rotate(-45deg);
			-o-transform: translateY(-13px) rotate(-45deg);
			transform: translateY(-13px) rotate(-45deg);
		}
	}
	@media screen and (max-width: 420px) {
		padding: 0 1.2rem;
	}
`;

const Navbar = () => {
	const [theme, setTheme] = useState('light');
	const [linkOpen, setLinkOpen] = useState(false);

	const toggleTheme = () => {
		theme == 'light' ? setTheme('dark') : setTheme('light');
	};

	const toggleLinks = () => {
		setLinkOpen((prev) => !prev);
	};

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<StyledNav>
				<h2>Shortly</h2>
				<div className="menu">
					<ul className={linkOpen ? 'linksOpen' : ''}>
						<li className="links">Features</li>
						<li className="links">Pricing</li>
						<li className="links">Resources</li>
					</ul>
					<div className="navBtns">
						<ThemeButton onClick={toggleTheme}>Switch Theme</ThemeButton>

						<div
							className={
								linkOpen
									? 'hamburger toggleBtn hambars is-active'
									: 'hamburger toggleBtn'
							}
							onClick={toggleLinks}
						>
							<span className="line"></span>
							<span className="line"></span>
							<span className="line"></span>
						</div>
					</div>
				</div>
			</StyledNav>
		</ThemeProvider>
	);
};

export default Navbar;

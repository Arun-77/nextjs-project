// our-domain.com/
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LinkBox from '../components/LinkBox';
import Stats from '../components/Stats';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';
// import { Container } from '../styles/Container.styled';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<LinkBox />
			<Stats />
			<GetStarted />
			<Footer />
		</>
	);
};

export default HomePage;

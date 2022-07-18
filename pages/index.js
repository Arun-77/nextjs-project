// our-domain.com/
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LinkBox from '../components/LinkBox';
import Stats from '../components/Stats';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';
import Head from 'next/head';

const HomePage = () => {
	return (
		<>
			<Head>
				<title>Shortly | URL Shortener App</title>
			</Head>
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

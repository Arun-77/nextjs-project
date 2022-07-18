import Image from 'next/image';
import styled from 'styled-components';
import stat from '../public/iconBrand.svg';

const StatSection = styled.section`
	padding: 3.5rem 0.6rem 2rem 0.6rem;

	h2 {
		font-weight: 700;
		font-size: 2.7rem;
		text-align: center;
		letter-spacing: 0.001rem;
		margin-bottom: 0.75rem;
	}
	.desc {
		line-height: 2.1rem;
		margin: 0 auto;
		font-size: 1.2rem;
		color: #999;
		max-width: 580px;
		margin-bottom: 2.5rem;
		text-align: center;
	}
	@media screen and (max-width: 650px) {
		padding: 3.5rem 2rem 2rem 2rem;
		h2 {
			font-size: 1.6rem;
		}
		.desc {
			line-height: 1.7rem;
			font-size: 0.9rem;
			font-weight: 500;
		}
	}
	.outerBox {
		margin-top: 3rem;
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		justify-content: space-evenly;
	}
	@media screen and (max-width: 1000px) {
		.individual_box {
			max-width: 270px;
		}
	}

	.individual_box {
		position: relative;
		max-width: 300px;
		margin: 0 2rem;
		border-radius: 5px;
	}
	h4 {
		color: #333;
		margin-top: 5px;
	}
	@media screen and (max-width: 1050px) {
		.individual_box {
			margin: 1rem 0;
			max-width: 270px;
		}
		h4 {
			font-size: 1.1rem;
		}
		.brand_desc {
			font-size: 0.7rem;
		}
	}
	@media screen and (max-width: 950px) {
		.outerBox {
			flex-direction: column;
			align-items: center;
		}
		.individual_box {
			max-width: 400px;
		}
	}
`;

const Brand = styled.article`
	padding: 1rem 1.2rem 1.5rem 1.2rem;
	background-color: #fff;
	border-radius: 5px;
	.brand_desc {
		color: #999;
		margin-top: 0.7rem;
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media screen and (max-width: 768px) {
		text-align: center;
		.brand_desc {
			padding: 0 0.7rem;
		}
		.outerBox {
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
		}
	}
`;

const Stats = () => {
	return (
		<>
			<StatSection className="linkSec">
				<h2>Advanced Statistics</h2>
				<h4 className="desc">
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</h4>
				<div className="outerBox">
					<div className="individual_box">
						<Brand>
							<Image src={stat} alt="stat_Image" />
							<h4>Brand Recognition</h4>
							<h5 className="brand_desc">
								Boost your brand recognition with each click.Generic links dont
								mean a thing.Branded links help instil confidence in your
								content
							</h5>
						</Brand>
					</div>

					<div className="individual_box">
						<Brand>
							<Image src={stat} alt="stat_Image" />
							<h4>Brand Recognition</h4>
							<h5 className="brand_desc">
								Boost your brand recognition with each click.Generic links dont
								mean a thing.Branded links help instil confidence in your
								content
							</h5>
						</Brand>
					</div>

					<div className="individual_box">
						<Brand>
							<Image src={stat} alt="stat_Image" />
							<h4>Brand Recognition</h4>
							<h5 className="brand_desc">
								Boost your brand recognition with each click.Generic links dont
								mean a thing.Branded links help instil confidence in your
								content
							</h5>
						</Brand>
					</div>
				</div>
			</StatSection>
		</>
	);
};

export default Stats;

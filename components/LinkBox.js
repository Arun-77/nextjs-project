import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import mete from './assets/iconMeteor.svg';
import Image from 'next/image';

const default_links = [
	{
		id: '1',
		Link: 'https://www.frontendmentor.io',
		shortLink: 'https://rel.ink/k4lKyk',
		isCopied: false,
	},
	{
		id: '2',
		Link: 'https://twitter.com/frontendmentor',
		shortLink: 'https://rel.ink/gxOXp9',
		isCopied: true,
	},
	{
		id: '3',
		Link: 'https://www.linkedin.com/company/frontend-mentor',
		shortLink: 'https://rel.ink/gob3X9',
		isCopied: false,
	},
];

const FormBox = styled.div`
	position: relative;
	max-width: 960px;
	width: 90%;
	padding: 0 2rem;
	height: 120px;
	margin: 0 auto 1.45rem auto;
	width: 100%;
	overflow: hidden;

	.Error {
		color: #333;
		background-color: #ec7866;
		max-width: 400px;
		width: 80%;
		font-size: 0.8rem;
		height: 30px;
		position: absolute;
		border-radius: 5px;
		padding-left: 1rem;
		padding-top: 0.25rem;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		font-weight: 500;
		z-index: 5;
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
		margin: 0 auto;
	}

	@media screen and (max-width: 580px) {
		height: 170px;
	}
	@media screen and (max-width: 480px) {
		padding: 0 1rem;
	}
`;

const Form = styled.form`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	& input {
		height: 45px;
		width: 68%;
		border-radius: 7px;
		border: 3.5px solid #fff;
		outline: none;
		font-weight: 700;
		margin: 0 1rem 0 0;
		font-size: 1.1rem;
		padding: 0 1.2rem;
		&:focus {
			border: 3.5px solid #f46262;
		}
	}
	::placeholder {
		color: #f46262;
		opacity: 1;
	}
	::-ms-input-placeholder {
		color: #f46262;
	}
	& button {
		width: 18%;
		height: 45px;
		background-color: #2acfcf;
		border-radius: 7px;
		font-size: 1rem;
		font-weight: 700;
		color: #fff;
		border: none;
		outline: none;
		margin-left: 0.9rem;
		cursor: pointer;
		&:hover {
			background-color: #8ed8e5;
		}
	}
	@media screen and (max-width: 580px) {
		max-width: 80%;
		flex-direction: column;
		width: 90%;
		height: 150px;
		& input {
			width: 90%;
			margin-left: 0.8rem;
		}
		& button {
			width: 90%;
			margin: 30px 0 0 0;
		}
	}
`;

const Article = styled.article`
	max-width: 960px;
	width: 85%;
	margin: 0 auto;
	min-height: 220px;

	.linkbox {
		border-radius: 5px;
		height: 60px;
		display: flex;
		justify-content: space-between;
		font-size: 1rem;
		align-items: center;
		font-weight: 500;
		background-color: #fff;
		margin-top: 1.2rem;
		padding: 0 1.5rem;
	}
	.inputLink {
		color: #222;
	}
	.shrtlink {
		display: flex;
		align-items: center;
		color: #2acfcf;

		& button {
			height: 33px;
			width: 78px;
			background-color: #2acfcf;
			color: #fff;
			border: none;
			outline: none;
			border-radius: 6px;
			font-size: 0.8rem;
			font-family: 'Poppins', sans-serif;
			font-weight: 700;
			cursor: pointer;
			margin-left: 1rem;
			transition: background-color 0.25s ease;

			&:hover {
				background-color: #8ed8e5;
			}
		}

		.copiedbg {
			background-color: #3b3054;

			&:hover {
				background-color: #3b3054;
			}
		}
	}

	@media screen and (max-width: 970px) {
		.linkbox {
			flex-direction: column;
			height: auto;
			padding: 0 0 1.2rem 0;

			.inputLink {
				padding-top: 1rem;
				text-align: center;
				height: 50px;
				border-bottom: 1px solid #555;
				width: 100%;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow-x: hidden;
				padding: 0.85rem 1rem 0 1rem;
			}

			& .shrtlink {
				flex-direction: column;

				& p {
					padding: 0.5rem 0;
				}

				& button {
					margin: 0;
					width: 100%;
				}
			}
		}
	}

	@media screen and (max-width: 580px) {
		.shrtlink {
			width: 90%;
			& button {
				width: 80%;
			}
		}
	}

	@media screen and (max-width: 400px) {
		.shrtlink {
			align-items: flex-start;
		}
	}

	@media screen and (max-width: 360px) {
		.shrtlink > p {
			font-size: 0.8rem;
		}
	}
`;

const LinkBox = () => {
	const inputRef = useRef('');
	const [links, setLinks] = useState(default_links);
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		// setErr(null);
		axios
			.post(
				`https://api.shrtco.de/v2/shorten?url=${inputRef.current.value.trim()}`
			)
			.then((res) => {
				console.log(res.data);
				if (
					res.data.result.full_short_link2 &&
					res.data.result.original_link !== undefined
				) {
					const newLink = {
						id: uuidv4().toString(),
						Link: res.data.result.original_link,
						shortLink: res.data.result.full_short_link2,
						isCopied: false,
					};

					setLinks((prev) => [newLink, ...prev]);
				}

				inputRef.current.value = '';
			})
			.catch((error) => {
				setErr(error.response.data.error);
				console.log(err);
				// console.log(error);
			});
	};

	const copyHandler = (id) => {
		const newLists = links.map((link) => {
			if (link.id === id) {
				return { ...link, isCopied: true };
			}
			return link;
		});
		setLinks(newLists);
	};

	useEffect(() => {
		const time = setTimeout(() => {
			setErr(null);
		}, 3000);

		return () => clearTimeout(time);
	}, [err]);

	return (
		<section className="linkSec">
			<FormBox>
				{err && <h2 className={err ? 'Error active' : 'Error'}>{err}</h2>}
				<Image src={mete} alt="form_Image" className="formImg" />
				<Form onSubmit={submitHandler}>
					<input
						ref={inputRef}
						type="text"
						placeholder="Shorten a link here..."
						required
					/>
					<button type="submit">Shorten It</button>
				</Form>
			</FormBox>

			<Article>
				{loading && <h1 style={{ textAlign: 'center' }}>Loading...</h1>}
				{!loading &&
					links?.map((item) => (
						<div key={item.id} className="linkbox">
							<p className="inputLink">{item.Link}</p>
							<div className="shrtlink">
								<p>{item.shortLink}</p>
								<CopyToClipboard
									text={item.shortLink}
									// onCopy={() => setCopied(true)}
								>
									<button
										className={item.isCopied ? 'copiedbg' : ''}
										onClick={() => copyHandler(item.id)}
									>
										{item.isCopied ? 'Copied!' : 'Copy'}
									</button>
								</CopyToClipboard>
							</div>
						</div>
					))}
			</Article>
		</section>
	);
};

export default LinkBox;


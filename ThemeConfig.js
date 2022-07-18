import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
	body: '#fff',
	text: '#333',
	background: '#222',
	links: '#777',
	linksHover: '#222',
	linksBox: '#fff',
	linkSection: '#eeecee',
	navDrop: '#fff',
};

export const darkTheme = {
	body: '#222',
	text: '#fff',
	background: '#222',
	links: '#bfbfbf',
	linksHover: '#fff',
	linksBox: '#555',
	linkSection: '#222',
	navDrop: '#555',
};

export const GlobalStyles = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   html{
      scroll-behavior: smooth;
   }
   body{
      font-size: 18px;
      background : ${({ theme }) => theme.body};
      color : ${({ theme }) => theme.text};
      font-family : 'Poppins', sans-serif;
      font-weight : 500;
      transition : all 0.5s ease;
      width: 100%;
      min-height: 100vh;
   }
   .links{
      color: ${({ theme }) => theme.links};
   }
   .links:hover{
      color: ${({ theme }) => theme.linksHover};
   }
   .linkSec{
      background-color: ${({ theme }) => theme.linkSection};
      transition: all 0.5s ease;
   }
   @media screen and (max-width: 768px){
      
      .menu ul{
         background-color: ${({ theme }) => theme.navDrop};
      }
   }
   
`;

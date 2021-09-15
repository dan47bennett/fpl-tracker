import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Layout } from '../components/Layout';

const GlobalStyle = createGlobalStyle`
html{
  background: #F0F9FA;
  display:block;
  height: 100%;
  width:100%;
}

body{
  min-height:100vh;
  font-family:Verdana;
  margin: 0 auto
}
`;

const theme = {
	colors: {
		primary: '#F0F9FA',
		secondary: '#46A2C3',
		alt: '#E5E5E5',
		button: '#093249',
	},
	fontSize: {
		title: '20px',
		table: '12px',
	},
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
export default MyApp;

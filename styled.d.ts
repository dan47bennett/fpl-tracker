import 'styled-components';

// and extend it
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			alt: string;
			button: string;
			transparentButton: string;
		};
		fontSize: {
			title: string;
			subTitle: string;
			table: string;
		};
	}
}

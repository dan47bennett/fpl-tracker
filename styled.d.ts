import 'styled-components';

// and extend it
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			alt: string;
			button: string;
		};
		fontSize: {
			title: string;
			table: string;
		};
		columnWidth: {
			name: string;
			totalPoints: string;
			nowCost: string;
			pointsPerGame: string;
			ppgPerMillion: string;
			form: string;
		};
	}
}

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
			form: string;
			name: string;
			nowCost: string;
			pointsPerGame: string;
			position: string;
			ppgPerMillion: string;
			teamName: string;
			totalPoints: string;
		};
	}
}

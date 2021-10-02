const proxyURL = 'https://thawing-ocean-11321.herokuapp.com';

export const maxMobileWidth = 750;

export const url = {
	general: `${proxyURL}/fantasy.premierleague.com/api/bootstrap-static/`,
	players: `${proxyURL}/fantasy.premierleague.com/api/element-summary/`, // addd element_id after the '/'
};

export const teamNames: Record<number, string> = {
	1: 'Arsenal',
	2: 'Aston Villa',
	3: 'Brentford',
	4: 'Brighton',
	5: 'Burnley',
	6: 'Chelsea',
	7: 'Crystal Palace',
	8: 'Everton',
	9: 'Leicester',
	10: 'Leeds United',
	11: 'Liverpool',
	12: 'Man City',
	13: 'Man United',
	14: 'Newcastle',
	15: 'Norwich',
	16: 'Southampton',
	17: 'Spurs',
	18: 'Watford',
	19: 'West Ham',
	20: 'Wolves',
};

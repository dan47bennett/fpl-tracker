const proxyURL = 'https://thawing-ocean-11321.herokuapp.com';

export const maxMobileWidth = 750;

export const url = {
	general: `${proxyURL}/fantasy.premierleague.com/api/bootstrap-static/`,
	players: `${proxyURL}/fantasy.premierleague.com/api/element-summary`, // add element_id after the '/'
	playerPhoto:
		'https://resources.premierleague.com/premierleague/photos/players/110x140/p',
	teamPhoto: 'https://resources.premierleague.com/premierleague/badges/t',
};

export const teamNames: Record<number, string> = {
	1: 'Arsenal',
	2: 'Aston Villa',
	3: 'Bournemouth',
	4: 'Brentford',
	5: 'Brighton',
	6: 'Chelsea',
	7: 'Crystal Palace',
	8: 'Everton',
	9: 'Fulham',
	11: 'Leeds',
	10: 'Leicester',
	12: 'Liverpool',
	13: 'M. City',
	14: 'M. United',
	15: 'Newcastle',
	16: 'Nottingham Forest',
	17: 'Southampton',
	18: 'Tottenham',
	19: 'West Ham',
	20: 'Wolves',
};

export const badgeCode: Record<number, number> = {
	1: 3,
	2: 7,
	3: 91,
	4: 94,
	5: 36,
	6: 8,
	7: 31,
	8: 11,
	9: 54,
	10: 13,
	11: 2,
	12: 14,
	13: 43,
	14: 1,
	15: 4,
	16: 17,
	17: 20,
	18: 6,
	19: 21,
	20: 39,
};

export const teamAbbrs: Record<string, string> = {
	1: 'ARS',
	2: 'AVL',
	3: 'BOU',
	4: 'BRE',
	5: 'BHA',
	6: 'CHE',
	7: 'CRY',
	8: 'EVE',
	9: 'FUL',
	11: 'LEE',
	10: 'LEI',
	12: 'LIV',
	13: 'MNC',
	14: 'MNU',
	15: 'NEW',
	16: 'FOR',
	17: 'SOU',
	18: 'TOT',
	19: 'WHU',
	20: 'WOL',
};

export const positionInitials = ['GK', 'DEF', 'MID', 'FWD'];
export const positionWords = [
	'Goalkeepers',
	'Defenders',
	'Midfielders',
	'Forwards',
];

export const allAbbrs = Object.values(teamAbbrs);
export const allNames = Object.values(teamNames);

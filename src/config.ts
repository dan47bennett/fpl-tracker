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
	3: 'Brentford',
	4: 'Brighton',
	5: 'Burnley',
	6: 'Chelsea',
	7: 'Crystal Palace',
	8: 'Everton',
	10: 'Leeds United',
	9: 'Leicester',
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

export const badgeCode: Record<number, number> = {
	1: 3,
	2: 7,
	3: 94,
	4: 36,
	5: 90,
	6: 8,
	7: 31,
	8: 11,
	10: 2,
	9: 13,
	11: 14,
	12: 43,
	13: 1,
	14: 4,
	15: 45,
	16: 20,
	17: 6,
	18: 57,
	19: 21,
	20: 39,
};

export const teamAbbrs: Record<string, string> = {
	Arsenal: 'ARS',
	'Aston Villa': 'AVL',
	Brentford: 'BRE',
	Brighton: 'BHA',
	Burnley: 'BUR',
	Chelsea: 'CHE',
	'Crystal Palace': 'CRY',
	Everton: 'EVE',
	'Leeds United': 'LEE',
	Leicester: 'LEI',
	Liverpool: 'LIV',
	'Man City': 'MNC',
	'Man United': 'MNU',
	Newcastle: 'NEW',
	Norwich: 'NOR',
	Southampton: 'SOU',
	Spurs: 'TOT',
	Watford: 'WAT',
	'West Ham': 'WHU',
	Wolves: 'WOL',
};

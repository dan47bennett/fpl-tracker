import { teamNames, teamAbbrs } from '../config';
import { Player } from '../types';

const positionConversion = (player: Player) => {
	if (player.element_type === 1) {
		return 'GK';
	} else if (player.element_type === 2) {
		return 'DEF';
	} else if (player.element_type === 3) {
		return 'MID';
	} else if (player.element_type === 4) {
		return 'FWD';
	}
};

const teamConversion = (player: Player) => {
	const teamCode = player.team;
	const teamName = teamNames[teamCode];
	return teamName;
};

const getAbbreviation = (player: Player) => {
	const teamCode = player.team;
	const teamAbbr = teamAbbrs[teamCode];
	return teamAbbr;
};

const cleanPlayerData = (players: Player[]) => {
	return players.map((p) => {
		const ppg = parseFloat(p.points_per_game.toString());

		return {
			...p,
			points_per_game: ppg,
			ppgPerMillion: (ppg / p.now_cost).toFixed(2),
			position: positionConversion(p),
			team_abbr: getAbbreviation(p),
			team_name: teamConversion(p),
			web_name: p.web_name.replace(/[012~[\]]/g, '').trim(),
		};
	});
};

export default cleanPlayerData;


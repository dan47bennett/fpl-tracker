import { teamNames } from '../config';
import { Player } from '../types';

const positionConversion = (player: Player) => {
	if (player.element_type === 1) {
		return 'GK';
	} else if (player.element_type === 2) {
		return 'DEF';
	} else if (player.element_type === 3) {
		return 'MID';
	} else if (player.element_type === 1) {
		return 'FWD';
	}
};

const teamConversion = (player: Player) => {
	const teamCode = player.team;
	const teamName = teamNames[teamCode - 1];
	return teamName;
};

const cleanPlayerData = (players: Player[]) => {
	for (let i = 0; i < players.length; i++) {
		const player = players[i];
		const ppg = parseFloat(player.points_per_game.toString());
		const cost = player.now_cost / 10;
		const ppgPerMillion = (ppg / cost).toFixed(2);
		player.ppg_per_million = ppgPerMillion;

		player.points_per_game = ppg;

		player.web_name = player.web_name.replace(/[012~[\]]/g, '').trim();

		player.position = positionConversion(player);
		player.team_name = teamConversion(player);
	}
};

export default cleanPlayerData;

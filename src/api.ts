import axios from 'axios';
import { url } from './config';
import { Player } from './types';

axios.create({
	headers: {
		'x-requested-With': 'XMLHttpRequest',
	},
});

export const getAllPlayerInfo = async (): Promise<Player[]> => {
	const info = await axios.get(url.general);
	const players = info.data.elements;

	for (let i = 0; i < players.length; i++) {
		const player = players[i];
		const ppg = parseFloat(player.points_per_game);
		const cost = player.now_cost / 10;
		const ppgPerMillion = (ppg / cost).toFixed(2);
		player.ppg_per_million = ppgPerMillion;

		player.points_per_game = parseFloat(player.points_per_game);
	}

	return players;
};

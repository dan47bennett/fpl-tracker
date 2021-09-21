import axios from 'axios';
import { url } from './config';
import { Player } from './types';
import cleanPlayerData from './utils/cleanPlayerData';

axios.create({
	headers: {
		'x-requested-With': 'XMLHttpRequest',
	},
});

export const getAllPlayerInfo = async (): Promise<Player[]> => {
	const info = await axios.get(url.general);
	const players = info.data.elements;

	cleanPlayerData(players);

	return players;
};

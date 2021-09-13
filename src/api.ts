import axios from 'axios';
import { url } from './config';
import { Player } from './types';

axios.create({
	headers: {
		'x-requested-With': 'XMLHttpRequest',
	},
});

export const getAllPlayerInfo = async () => {
	const info = await axios.get(url.general);
	const players: Player[] = info.data.elements;
	return players;
};

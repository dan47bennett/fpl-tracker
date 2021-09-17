import { Player, playerProp } from '../types';

export const sortByKey = (
	array: Player[],
	key: playerProp,
	reverse: boolean
) => {
	if (key === 'web_name') reverse = !reverse;

	if (reverse) {
		return array.sort((a, b) => {
			if (a[key] < b[key]) return -1;
			if (a[key] > b[key]) return 1;
			return 0;
		});
	}
	return array.sort((a, b) => {
		if (a[key] < b[key]) return 1;
		if (a[key] > b[key]) return -1;
		return 0;
	});
};

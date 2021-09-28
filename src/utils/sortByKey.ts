import { Player, playerProp } from '../types';

const helpType = (value: any) => {
	return value as number | string | number;
};

export const sortByKey = (
	array: Player[],
	key: playerProp,
	reverse: boolean
) => {
	if (key === 'web_name') reverse = !reverse;

	if (reverse) {
		return array.sort((a: Player, b: Player) => {
			if (helpType(a[key]) < helpType(b[key])) {
				return -1;
			}
			if (helpType(a[key]) > helpType(b[key])) {
				return 1;
			}
			return 0;
		});
	}
	return array.sort((a: Player, b: Player) => {
		if (helpType(a[key]) < helpType(b[key])) {
			return 1;
		}
		if (helpType(a[key]) > helpType(b[key])) {
			return -1;
		}
		return 0;
	});
};

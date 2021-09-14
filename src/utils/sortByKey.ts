import { Player, PlayerSortProps } from '../types';

export const sortByKey = (array: Player[], key: keyof PlayerSortProps) => {
	return array.sort((a, b) => {
		if (a[key] < b[key]) return 1;
		if (a[key] > b[key]) return -1;
		return 0;
	});
};

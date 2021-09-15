import React, { useEffect, useMemo, useState } from 'react';
import { Player, PlayerSortProps } from '../../types';
import { sortByKey } from '../../utils/sortByKey';
import { PageSelectionButtons } from './PageSelectionButtons';
import { PlayerTable } from './PlayerTable';

const headings = ['Name', 'Total Points'];

export const RankingTable: React.FC<{ players: Player[] }> = ({ players }) => {
	const [sortingKey, setSortingKey] = useState<keyof PlayerSortProps>(
		'total_points'
	);
	const [sortedData, setSortedData] = useState<Player[]>([]);
	const [page, setPage] = useState(0);

	const displayData = useMemo(
		() => sortedData.slice(20 * page, 20 * (page + 1)),
		[sortedData, page]
	);

	useEffect(() => {
		if (players) {
			const sortedArray = sortByKey(players, sortingKey);
			console.log('sortedArray: ', sortedArray);
			setSortedData(sortedArray);
		}
	}, [players, sortingKey]);

	return (
		<>
			<PlayerTable players={displayData} />
			<PageSelectionButtons
				onClickPrev={() => {
					if (page > 0) setPage((page) => page - 1);
				}}
				onClickNext={() => {
					if (page < 29) setPage(page + 1);
				}}
				PageText={page + 1}
			/>
		</>
	);
};

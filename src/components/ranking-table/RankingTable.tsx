import React, { useEffect, useState } from 'react';
import { TableContainer } from '../../styles/playerTableStyles';
import { Player, PlayerSortProps } from '../../types';
import { sortByKey } from '../../utils/sortByKey';
import { PageSelectionButtons } from './PageSelectionButtons';
import { PlayerTable } from './PlayerTable';
import { TableHeadings } from './TableHeadings';

export const RankingTable: React.FC<{ players: Player[] }> = ({ players }) => {
	const [sortingKey, setSortingKey] = useState<keyof PlayerSortProps>(
		'total_points'
	);
	const [displayData, setDisplayData] = useState<Player[]>([]);
	const [page, setPage] = useState(0);

	useEffect(() => {
		if (players) {
			const sortedArray = sortByKey(players, sortingKey);
			const slicedData = sortedArray.slice(20 * page, 20 * (page + 1));
			setDisplayData(slicedData);
		}
	}, [players, sortingKey, page]);

	return (
		<TableContainer>
			<TableHeadings setSortingKey={setSortingKey} setPage={setPage} />
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
		</TableContainer>
	);
};

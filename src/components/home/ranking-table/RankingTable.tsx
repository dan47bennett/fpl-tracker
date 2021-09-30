import React, { useEffect, useState } from 'react';
import { TableContainer } from '../../../styles/playerTableStyles';
import { Player, playerProp } from '../../../types';
import { sortByKey } from '../../../utils/sortByKey';
import { PageSelectionButtons } from './PageSelectionButtons';
import { PlayerTable } from './PlayerTable';
import { TableHeadings } from './TableHeadings';

export const RankingTable: React.FC<{
	players: Player[];
	playersPerPage: number;
}> = ({ players, playersPerPage }) => {
	const [sortingKey, setSortingKey] = useState<playerProp>('total_points');
	const [displayData, setDisplayData] = useState<Player[]>([]);
	const [page, setPage] = useState(0);
	const [reverse, setReverse] = useState(false);

	useEffect(() => {
		if (players) {
			const sortedArray = sortByKey(players, sortingKey, reverse);
			const slicedData = sortedArray.slice(
				playersPerPage * page,
				playersPerPage * (page + 1)
			);
			setDisplayData(slicedData);
		}
	}, [players, sortingKey, page, reverse, playersPerPage]);

	const onHeadingClick = (sortProp: playerProp) => {
		if (sortProp === sortingKey) {
			setReverse(!reverse);
		} else {
			setReverse(false);
		}
		setPage(0);
		setSortingKey(sortProp);
	};

	return (
		<TableContainer>
			<TableHeadings
				onHeadingClick={onHeadingClick}
				sortingKey={sortingKey}
			/>
			<PlayerTable players={displayData} />
			<PageSelectionButtons
				onClickPrev={() => {
					if (page > 0) setPage((page) => page - 1);
				}}
				onClickNext={() => {
					if (page < players.length / playersPerPage - 1)
						setPage(page + 1);
				}}
				PageText={page + 1}
			/>
		</TableContainer>
	);
};

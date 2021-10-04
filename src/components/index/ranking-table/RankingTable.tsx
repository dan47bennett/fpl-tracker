import React, { useEffect, useState } from 'react';
import {
	RankingTableContainer,
	ScrollTable,
	TableContainer,
} from '../../../styles/playerTableStyles';
import { Player, playerProp } from '../../../types';
import { sortByKey } from '../../../utils/sortByKey';
import { PageSelectionButtons } from './PageSelectionButtons';
import { StatColumn } from './StatColumn';

const statsToShow = [
	{ title: 'Team', id: 'team_abbr' },
	{ title: 'Position', id: 'position' },
	{ title: 'Total Points', id: 'total_points' },
	{ title: 'PPG', id: 'points_per_game' },
	{ title: 'PPG per £M', id: 'ppg_per_million' },
	{ title: 'Form', id: 'form' },
];

interface RankingTableProps {
	players: Player[];
}

export const RankingTable: React.FC<RankingTableProps> = ({ players }) => {
	const [sortingKey, setSortingKey] = useState<playerProp>('total_points');
	const [displayData, setDisplayData] = useState<Player[]>([]);
	const [page, setPage] = useState(0);
	const [reverse, setReverse] = useState(false);

	const playersPerPage = 20;

	useEffect(() => {
		if (players) {
			const sortedArray = sortByKey(players, sortingKey, reverse);
			const slicedData = sortedArray.slice(
				playersPerPage * page,
				playersPerPage * (page + 1)
			);
			setDisplayData(slicedData);
		}
	}, [players, sortingKey, page, reverse]);

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
		<RankingTableContainer>
			<TableContainer>
				<StatColumn
					title="Name"
					id="web_name"
					onHeadingClick={onHeadingClick}
					sortingKey={sortingKey}
					data={displayData}
				/>
				<ScrollTable>
					{statsToShow.map((stat) => (
						<StatColumn
							key={stat.id}
							title={stat.title}
							id={stat.id as playerProp}
							onHeadingClick={onHeadingClick}
							sortingKey={sortingKey}
							data={displayData}
						/>
					))}
				</ScrollTable>
			</TableContainer>
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
		</RankingTableContainer>
	);
};

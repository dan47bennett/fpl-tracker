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
import { useTheme } from 'styled-components';

export const RankingTable: React.FC<{
	players: Player[];
	playersPerPage: number;
}> = ({ players, playersPerPage }) => {
	const [sortingKey, setSortingKey] = useState<playerProp>('total_points');
	const [displayData, setDisplayData] = useState<Player[]>([]);
	const [page, setPage] = useState(0);
	const [reverse, setReverse] = useState(false);

	const theme = useTheme();

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
		<RankingTableContainer>
			<TableContainer>
				<StatColumn
					title="Name"
					id="web_name"
					onHeadingClick={onHeadingClick}
					sortingKey={sortingKey}
					data={displayData}
					width={theme.columnWidth.name}
				/>
				<ScrollTable>
					<StatColumn
						title="Team"
						id="team_abbr"
						onHeadingClick={onHeadingClick}
						sortingKey={sortingKey}
						data={displayData}
						width={theme.columnWidth.teamName}
					/>
					<StatColumn
						title="Position"
						id="position"
						onHeadingClick={onHeadingClick}
						sortingKey={sortingKey}
						data={displayData}
						width={theme.columnWidth.teamName}
					/>
					<StatColumn
						title="Total Points"
						id="total_points"
						onHeadingClick={onHeadingClick}
						sortingKey={sortingKey}
						data={displayData}
						width={theme.columnWidth.teamName}
					/>
					<StatColumn
						title="Current Cost"
						id="now_cost"
						onHeadingClick={onHeadingClick}
						sortingKey={sortingKey}
						data={displayData}
						width={theme.columnWidth.teamName}
					/>
					<StatColumn
						title="PPG"
						id="points_per_game"
						onHeadingClick={onHeadingClick}
						sortingKey={sortingKey}
						data={displayData}
						width={theme.columnWidth.teamName}
					/>
					<StatColumn
						title="PPG per £M"
						id="ppg_per_million"
						onHeadingClick={onHeadingClick}
						sortingKey={sortingKey}
						data={displayData}
						width={theme.columnWidth.teamName}
					/>
					<StatColumn
						title="Form"
						id="form"
						onHeadingClick={onHeadingClick}
						sortingKey={sortingKey}
						data={displayData}
						width={theme.columnWidth.teamName}
					/>
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

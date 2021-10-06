import React, { useEffect, useState } from 'react';
import { Player } from '../../types';
import { RankingTable } from './ranking-table/RankingTable';
import { teamAbbrs } from '../../config';
import { SortSelect } from '../../styles/playerTableStyles';
import { ContainerHorizontalResp, TextBox } from '../../styles/genericStyles';

interface PlayerDisplayProps {
	players: Player[];
}

const positionInitials = ['GK', 'DEF', 'MID', 'FWD'];
const positionWords = ['Goalkeepers', 'Defenders', 'Midfielders', 'Forwards'];

const allAbbrs = Object.values(teamAbbrs);
const allNames = Object.keys(teamAbbrs);

export const PlayerDisplay: React.FC<PlayerDisplayProps> = ({ players }) => {
	const [positionSort, setPositionSort] = useState('all');
	const [teamSort, setTeamSort] = useState('all');
	const [displayData, setDisplayData] = useState(players);
	const [page, setPage] = useState(0);

	const onChangePosition = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedPosition = e.target.value;
		setPositionSort(selectedPosition);
		setPage(0);
	};

	const onChangeTeam = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedTeam = e.target.value;
		setTeamSort(selectedTeam);
		setPage(0);
	};

	useEffect(() => {
		let filtered = players;
		if (positionSort !== 'all') {
			console.log('positionSort: ', positionSort);
			filtered = filtered.filter(
				(player) => player.position === positionSort
			);
		}
		if (teamSort !== 'all') {
			filtered = filtered.filter(
				(player) => player.team_abbr === teamSort
			);
		}
		setDisplayData(filtered);
	}, [players, positionSort, teamSort]);

	return (
		<>
			<TextBox>
				Welcome to FPL Tracker. Here you can get a more in-depth insight
				into the profile and stats behind your current stars and
				potential transfer targets.
			</TextBox>
			<ContainerHorizontalResp>
				<label htmlFor="team-select">Team</label>
				<SortSelect id="team-select" onChange={onChangeTeam}>
					<option value={'all'}>All</option>
					{allNames.map((name) => {
						const index = allNames.indexOf(name);
						return (
							<option key={index} value={allAbbrs[index]}>
								{name}
							</option>
						);
					})}
				</SortSelect>
				<label htmlFor="position-select">Position</label>
				<SortSelect id="position-select" onChange={onChangePosition}>
					<option value={'all'}>All</option>
					{positionInitials.map((position) => {
						const index = positionInitials.indexOf(position);
						return (
							<option key={index} value={positionInitials[index]}>
								{positionWords[index]}
							</option>
						);
					})}
				</SortSelect>
			</ContainerHorizontalResp>

			<RankingTable players={displayData} page={page} setPage={setPage} />
		</>
	);
};

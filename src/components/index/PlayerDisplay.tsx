import React, { useState } from 'react';
import { Player } from '../../types';
import { RankingTable } from './ranking-table/RankingTable';

interface PlayerDisplayProps {
	players: Player[];
}

const positions = ['GK', 'DEF', 'MID', 'FWD'];

export const PlayerDisplay: React.FC<PlayerDisplayProps> = ({ players }) => {
	const [subset, setSubset] = useState<string>('byPosition');

	if (subset === 'all') {
		return <RankingTable players={players}></RankingTable>;
	}
	if (subset === 'byPosition') {
		return (
			<>
				{positions.map((position) => {
					const displayData = players.filter(
						(player) => player.position === position
					);
					return (
						<RankingTable
							key={position}
							players={displayData}
						></RankingTable>
					);
				})}
			</>
		);
	}
	return <div>Hi</div>;
};

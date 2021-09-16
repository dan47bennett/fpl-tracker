import React from 'react';
import { Player } from '../../types';
import { PlayerEntry } from './PlayerEntry';

export const PlayerTable: React.FC<{ players: Player[] }> = ({ players }) => {
	return (
		<>
			{players.length > 0 ? (
				players.map((player) => (
					<PlayerEntry key={player.id} player={player} />
				))
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

import React from 'react';
import { Player } from '../types';
import styled from 'styled-components';
import { PlayerEntry } from './PlayerEntry';

const TableContainer = styled.div`
	margin: 20px auto;
	width: 90%;
	font-size: ${({ theme }) => theme.fontSize.table};
`;

export const PlayerTable: React.FC<{ players: Player[] }> = ({ players }) => {
	return (
		<TableContainer>
			{players.length > 0 ? (
				players.map((player) => (
					<PlayerEntry key={player.id} player={player} />
				))
			) : (
				<div>Loading...</div>
			)}
		</TableContainer>
	);
};

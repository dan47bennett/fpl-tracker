import React from 'react';
import {
	EntryContainer,
	NameRow,
	TotalPoints,
} from '../../styles/playerTableStyles';
import { Player } from '../../types';

export const PlayerEntry: React.FC<{ player: Player }> = ({ player }) => {
	return (
		<EntryContainer>
			<NameRow>{player.web_name}</NameRow>
			<TotalPoints>{player.total_points}</TotalPoints>
		</EntryContainer>
	);
};

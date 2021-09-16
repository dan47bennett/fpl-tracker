import React from 'react';
import {
	CostColumn,
	EntryContainer,
	NameColumn,
	TotalPointsColumn,
} from '../../styles/playerTableStyles';
import { Player } from '../../types';

export const PlayerEntry: React.FC<{ player: Player }> = ({ player }) => {
	return (
		<EntryContainer>
			<NameColumn>{player.web_name}</NameColumn>
			<TotalPointsColumn>{player.total_points}</TotalPointsColumn>
			<CostColumn>{player.now_cost / 10}</CostColumn>
		</EntryContainer>
	);
};

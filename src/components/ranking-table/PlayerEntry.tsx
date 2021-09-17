import React from 'react';
import { useTheme } from 'styled-components';
import { Column, EntryContainer } from '../../styles/playerTableStyles';
import { Player } from '../../types';

export const PlayerEntry: React.FC<{ player: Player }> = ({ player }) => {
	const theme = useTheme();

	return (
		<EntryContainer>
			<Column width={theme.columnWidth.name}>{player.web_name}</Column>
			<Column width={theme.columnWidth.totalPoints}>
				{player.total_points}
			</Column>
			<Column width={theme.columnWidth.nowCost}>
				{player.now_cost / 10}
			</Column>
		</EntryContainer>
	);
};

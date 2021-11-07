import React from 'react';
import { FullPlayerProps } from '../../types';
import { InfoEntry, QuickStatsBox } from '../../styles/profileStyles';

interface QuickStatsProps {
	player: FullPlayerProps;
}

export const QuickStats: React.FC<QuickStatsProps> = ({ player }) => {
	return (
		<QuickStatsBox>
			<InfoEntry>
				Total Points: {player.total_points} | Cost: {player.now_cost} |
				Owned by {player.selected_by_percent}% of players
			</InfoEntry>
		</QuickStatsBox>
	);
};

import React from 'react';
import { url } from '../../../config';
import { Row } from '../../../styles/genericStyles';
import { SecondaryCell } from '../../../styles/playerTableStyles';
import { PlayerImage, PlayerInfo } from '../../../styles/profileStyles';
import { FullPlayerProps } from '../../../types';

interface MiniProfileProps {
	player: FullPlayerProps;
}

export const MiniProfile: React.FC<MiniProfileProps> = ({ player }) => {
	return (
		<Row>
			<PlayerImage src={`${url.photo}${player.code}.png`} />
			<PlayerInfo>
				<SecondaryCell>
					{player.second_name.includes(player.web_name)
						? `${player.first_name} ${player.second_name}`
						: player.web_name}
				</SecondaryCell>
				<SecondaryCell>{`${player.position}`}</SecondaryCell>
				<SecondaryCell>{`${player.team_name}`}</SecondaryCell>
				<SecondaryCell>{`Total Points: ${player.total_points}`}</SecondaryCell>
				<SecondaryCell>{`Current Cost: ${player.now_cost}`}</SecondaryCell>
			</PlayerInfo>
		</Row>
	);
};

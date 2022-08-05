import React from 'react';
import { url, badgeCode } from '../../config';
import {
	PlayerBackground,
	BadgeImage,
	InfoBox,
	InfoEntry,
	PlayerInfoBox,
} from '../../styles/profileStyles';
import { FullPlayerProps } from '../../types';

interface MiniProfileProps {
	player: FullPlayerProps;
}

export const MiniProfile: React.FC<MiniProfileProps> = ({ player }) => {
	return (
		<PlayerInfoBox>
			<PlayerBackground
				style={{
					backgroundImage: `url(${url.playerPhoto}${player.code}.png)`,
				}}
			>
				<BadgeImage
					src={`${url.teamPhoto}${
						badgeCode[player.team as number]
					}.png`}
				/>
			</PlayerBackground>
			<InfoBox>
				<InfoEntry>
					{player.second_name.includes(player.web_name)
						? `${player.first_name} ${player.second_name}`
						: player.web_name}
				</InfoEntry>
				<InfoEntry>{player.team_name}</InfoEntry>
				<InfoEntry>Total Points: {player.total_points}</InfoEntry>
				<InfoEntry>{player.position}</InfoEntry>
				<InfoEntry>Current cost: {player.now_cost}</InfoEntry>
			</InfoBox>
		</PlayerInfoBox>
	);
};


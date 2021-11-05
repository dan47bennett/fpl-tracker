import React from 'react';
import { url, badgeCode } from '../../config';
import { Row } from '../../styles/genericStyles';
import {
	PlayerBackground,
	BadgeImage,
	InfoBox,
	InfoEntry,
} from '../../styles/profileStyles';
import { FullPlayerProps } from '../../types';

interface MiniProfileProps {
	player: FullPlayerProps;
}

export const MiniProfile: React.FC<MiniProfileProps> = ({ player }) => {
	// console.log('player: ', player);
	return (
		<Row>
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
		</Row>
	);
};

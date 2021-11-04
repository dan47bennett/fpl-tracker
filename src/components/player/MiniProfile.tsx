import React from 'react';
import { url, badgeCode } from '../../config';
import { Row } from '../../styles/genericStyles';
import { PlayerBackground, BadgeImage } from '../../styles/profileStyles';
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
		</Row>
	);
};

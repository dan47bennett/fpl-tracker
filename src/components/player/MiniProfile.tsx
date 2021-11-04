import React from 'react';
import { url, badgeCode } from '../../config';
import { Row } from '../../styles/genericStyles';
import { PlayerImage } from '../../styles/profileStyles';
import { FullPlayerProps } from '../../types';

interface MiniProfileProps {
	player: FullPlayerProps;
}

export const MiniProfile: React.FC<MiniProfileProps> = ({ player }) => {
	// console.log('player: ', player);
	return (
		<Row>
			<PlayerImage src={`${url.playerPhoto}${player.code}.png`} />
			<PlayerImage
				src={`${url.teamPhoto}${badgeCode[player.team as number]}.png`}
			/>
		</Row>
	);
};

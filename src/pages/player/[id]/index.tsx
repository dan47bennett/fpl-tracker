import React from 'react';
import { GetServerSideProps } from 'next';
import { url } from '../../../config';
import cleanPlayerData from '../../../utils/cleanPlayerData';
import { Player, FullPlayerProps } from '../../../types';
import { ProfileContainer } from '../../../styles/profileStyles';
import { MiniProfile } from '../../../components/player/MiniProfile';
import { ResponsiveRow } from '../../../styles/genericStyles';

interface PlayerProfileProps {
	player: FullPlayerProps;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ player }) => {
	// console.log('player: ', player);
	return (
		<ProfileContainer>
			<ResponsiveRow>
				<MiniProfile player={player} />
			</ResponsiveRow>
		</ProfileContainer>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	if (context && context.params) {
		const contextId = context.params.id;
		if (contextId) {
			const id = parseInt(contextId as string);

			const playerDataRes1 = await fetch(url.general, {
				headers: { 'User-Agent': 'ANYTHING_WILL_WORK_HERE' },
			});
			const playerJson1 = await playerDataRes1.json();
			const players1 = playerJson1.elements as Player[];
			cleanPlayerData(players1);
			const playerPart1 = players1.find((obj) => obj.id === id);

			const playerDataRes2 = await fetch(`${url.players}/${id}/`, {
				headers: { 'User-Agent': 'ANYTHING_WILL_WORK_HERE' },
			});
			const playerPart2 = await playerDataRes2.json();
			const player = { ...playerPart1, ...playerPart2 };

			if (playerPart1) {
				return { props: { player } };
			}
		} else {
			return { props: { player: [], morePlayerData: {} } };
		}
	}
	return { props: { player: [], morePlayerData: {} } };
};

export default PlayerProfile;

import React from 'react';
import { GetServerSideProps } from 'next';
import { url } from '../../../config';
import cleanPlayerData from '../../../utils/cleanPlayerData';
import { Player, FullPlayerProps } from '../../../types';
import {
	InfoEntry,
	MiniProfile,
	PlayerImage,
	PlayerInfo,
	ProfileContainer,
} from '../../../styles/profileStyles';

interface PlayerProfileProps {
	player: FullPlayerProps;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ player }) => {
	console.log('player: ', player);
	return (
		<ProfileContainer>
			<MiniProfile>
				<PlayerImage src={`${url.photo}${player.code}.png`} />
				<PlayerInfo>
					<InfoEntry>
						{player.second_name.includes(player.web_name)
							? `${player.first_name} ${player.second_name}`
							: player.web_name}
					</InfoEntry>
					<InfoEntry>{`${player.position}`}</InfoEntry>
					<InfoEntry>{`${player.team_name}`}</InfoEntry>
					<InfoEntry>
						{`Total Points: ${player.total_points}`}
					</InfoEntry>
					<InfoEntry>{`Current Cost: ${player.now_cost}`}</InfoEntry>
				</PlayerInfo>
			</MiniProfile>
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

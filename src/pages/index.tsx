import type { NextPage } from 'next';
import React from 'react';
import { PlayerDisplay } from '../components/index/PlayerDisplay';
import { url } from '../config';
import { Container } from '../styles/genericStyles';
import { Player } from '../types';
import cleanPlayerData from '../utils/cleanPlayerData';

interface IndexProps {
	players: Player[];
}

const Index: NextPage<IndexProps> = ({ players }) => {
	return (
		<Container>
			<PlayerDisplay players={players} />
		</Container>
	);
};

export async function getStaticProps() {
	const playerData = await fetch(url.general, {
		headers: { 'User-Agent': 'ANYTHING_WILL_WORK_HERE' },
	});
	const playerJson = await playerData.json();
	const players = playerJson.elements as Player[];
	cleanPlayerData(players);

	return {
		props: {
			players,
		},
		revalidate: 60 * 30,
	};
}

export default Index;

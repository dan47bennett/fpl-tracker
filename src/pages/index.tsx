import type { NextPage } from 'next';
import React from 'react';
import { RankingTable } from '../components/home/ranking-table/RankingTable';
import { url } from '../config';
import { Player } from '../types';
import cleanPlayerData from '../utils/cleanPlayerData';

interface IndexProps {
	players: any[];
}

const Index: NextPage<IndexProps> = ({ players }) => {
	return <RankingTable playersPerPage={20} players={players} />;
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

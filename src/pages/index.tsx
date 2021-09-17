import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { getAllPlayerInfo } from '../api';
import { RankingTable } from '../components/ranking-table/RankingTable';
import { Player } from '../types';

const Index: NextPage = () => {
	const [allData, setAllData] = useState<Player[]>([]);

	const loadData = async () => {
		const info = await getAllPlayerInfo();
		setAllData(info);
	};

	useEffect(() => {
		loadData();
	}, []);

	return <RankingTable playersPerPage={allData.length} players={allData} />;
};

export default Index;

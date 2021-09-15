import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { getAllPlayerInfo } from '../api';
import { PlayerEntry } from '../components/PlayerEntry';
import { RankingTable } from '../components/RankingTable';
import { Player } from '../types';
import { sortByKey } from '../utils/sortByKey';

const Index: NextPage = () => {
	const [allData, setAllData] = useState<Player[]>([]);
	const [displayData, setDisplayData] = useState<Player[]>([]);

	const loadData = async () => {
		const info = await getAllPlayerInfo();
		setAllData(info);
	};
	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		const sortedArray = sortByKey(allData, 'total_points');
		console.log('sortedArray: ', sortedArray);
		setDisplayData(sortedArray);
	}, [allData]);

	return <RankingTable players={displayData} />;
};

export default Index;

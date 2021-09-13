import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getAllPlayerInfo } from '../api';
import { Player } from '../types';

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
		const sortedByGoals = allData.sort((a, b) => {
			if (a.total_points < b.total_points) return 1;
			if (a.total_points > b.total_points) return -1;
			return 0;
		});
		console.log('sortedByGoals: ', sortedByGoals);
		setDisplayData(sortedByGoals);
	}, [allData]);

	return (
		<>
			<div>FPL Tracker</div>

			{displayData.map((player) => (
				<div key={player.id}>{player.second_name}</div>
			))}
		</>
	);
};

export default Index;

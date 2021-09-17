import React from 'react';
import {
	CostColumnHeading,
	HeadingContainer,
	NameColumnHeading,
	TotalPointsColumnHeading,
} from '../../styles/playerTableStyles';
import { playerProp } from '../../types';

interface TableHeadingsProps {
	onHeadingClick: (sortProp: playerProp) => void;
	sortingKey: playerProp;
}

export const TableHeadings: React.FC<TableHeadingsProps> = ({
	onHeadingClick,
	sortingKey,
}) => {
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		const id = e.currentTarget.id as playerProp;
		onHeadingClick(id);
	};

	return (
		<HeadingContainer>
			<NameColumnHeading
				sortingKey={sortingKey as string}
				id="web_name"
				onClick={handleClick}
			>
				Player Name
			</NameColumnHeading>
			<TotalPointsColumnHeading
				sortingKey={sortingKey as string}
				id="total_points"
				onClick={handleClick}
			>
				Total Points
			</TotalPointsColumnHeading>
			<CostColumnHeading
				sortingKey={sortingKey as string}
				id="now_cost"
				onClick={handleClick}
			>
				Current Cost
			</CostColumnHeading>
		</HeadingContainer>
	);
};

import React from 'react';
import { useTheme } from 'styled-components';
import {
	ColumnHeading,
	HeadingContainer,
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
	const theme = useTheme();

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		const id = e.currentTarget.id as playerProp;
		onHeadingClick(id);
	};

	return (
		<HeadingContainer>
			<ColumnHeading
				width={theme.columnWidth.name}
				sortingKey={sortingKey as string}
				id="web_name"
				onClick={handleClick}
			>
				Player Name
			</ColumnHeading>
			<ColumnHeading
				width={theme.columnWidth.totalPoints}
				sortingKey={sortingKey as string}
				id="total_points"
				onClick={handleClick}
			>
				Total Points
			</ColumnHeading>
			<ColumnHeading
				width={theme.columnWidth.nowCost}
				sortingKey={sortingKey as string}
				id="now_cost"
				onClick={handleClick}
			>
				Current Cost
			</ColumnHeading>
		</HeadingContainer>
	);
};

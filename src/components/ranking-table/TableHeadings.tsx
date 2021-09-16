import React from 'react';
import {
	CostColumn,
	HeadingContainer,
	NameColumn,
	TotalPointsColumn,
} from '../../styles/playerTableStyles';
import { PlayerSortProps } from '../../types';

interface TableHeadingsProps {
	setSortingKey: React.Dispatch<React.SetStateAction<keyof PlayerSortProps>>;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const TableHeadings: React.FC<TableHeadingsProps> = ({
	setSortingKey,
	setPage,
}) => {
	const onHeadingClick = (sortProp: keyof PlayerSortProps) => {
		setPage(0);
		setSortingKey(sortProp);
	};

	return (
		<HeadingContainer>
			<NameColumn onClick={() => onHeadingClick('web_name')}>
				Player Name
			</NameColumn>
			<TotalPointsColumn onClick={() => onHeadingClick('total_points')}>
				Total Points
			</TotalPointsColumn>
			<CostColumn onClick={() => onHeadingClick('now_cost')}>
				Current Cost
			</CostColumn>
		</HeadingContainer>
	);
};

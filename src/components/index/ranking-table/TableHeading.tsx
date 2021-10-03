import React from 'react';
import { ColumnHeading } from '../../../styles/playerTableStyles';
import { playerProp } from '../../../types';

interface TableHeadingProps {
	title: string;
	id: playerProp;
	onHeadingClick: (sortProp: playerProp) => void;
	sortingKey: playerProp;
}

export const TableHeading: React.FC<TableHeadingProps> = ({
	title,
	id,
	onHeadingClick,
	sortingKey,
}) => {
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		const id = e.currentTarget.id as playerProp;
		onHeadingClick(id);
	};

	return (
		<ColumnHeading
			sortingKey={sortingKey as string}
			id={id as string}
			onClick={handleClick}
		>
			{title}
		</ColumnHeading>
	);
};

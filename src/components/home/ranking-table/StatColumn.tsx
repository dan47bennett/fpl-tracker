import React from 'react';
import { Player, playerProp } from '../../../types';
import { TableHeading } from './TableHeading';
import { ColumnContainer, Column } from '../../../styles/playerTableStyles';

interface StatColumnProps {
	title: string;
	id: playerProp;
	onHeadingClick: (sortProp: playerProp) => void;
	sortingKey: playerProp;
	data: Player[];
	width: string;
}

export const StatColumn: React.FC<StatColumnProps> = ({
	title,
	id,
	onHeadingClick,
	sortingKey,
	data,
	width,
}) => {
	return (
		<ColumnContainer width={width}>
			<TableHeading
				title={title}
				id={id}
				onHeadingClick={onHeadingClick}
				sortingKey={sortingKey}
			></TableHeading>
			{data.map((player) => (
				<Column key={player.id}>{player[id]}</Column>
			))}
		</ColumnContainer>
	);
};

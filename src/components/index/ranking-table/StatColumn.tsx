import React from 'react';
import { Player, playerProp } from '../../../types';
import { TableHeading } from './TableHeading';
import {
	ColumnContainer,
	Cell,
	Column,
} from '../../../styles/playerTableStyles';

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
			<Column sortingKey={sortingKey} id={id}>
				{data.map((player) => (
					<Cell key={player.id}>{player[id]}</Cell>
				))}
			</Column>
		</ColumnContainer>
	);
};

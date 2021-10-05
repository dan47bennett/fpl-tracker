import React from 'react';
import { Player, playerProp } from '../../../types';
import { TableHeading } from './TableHeading';
import {
	ColumnContainer,
	Cell,
	Column,
} from '../../../styles/playerTableStyles';
import Link from 'next/link';

interface NameColumnProps {
	title: string;
	id: playerProp;
	onHeadingClick: (sortProp: playerProp) => void;
	sortingKey: playerProp;
	data: Player[];
}

export const NameColumn: React.FC<NameColumnProps> = ({
	onHeadingClick,
	sortingKey,
	data,
}) => {
	return (
		<ColumnContainer>
			<TableHeading
				title={'Name'}
				id={'web_name'}
				onHeadingClick={onHeadingClick}
				sortingKey={sortingKey}
			></TableHeading>
			<Column sortingKey={sortingKey} id="web_name">
				{data.map((player) => (
					<Cell key={player.id}>
						<Link href="/player/[id]" as={`/player/${player.id}`}>
							{player.web_name}
						</Link>
					</Cell>
				))}
			</Column>
		</ColumnContainer>
	);
};

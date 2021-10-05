import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const SortSelect = styled.select`
	width: 100px;
	margin: 5px auto;
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 10px;
	border: 2px solid;
`;

export const RankingTableContainer = styled.div`
	width: 70%;
	height: auto;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 10px auto;
	font-size: ${({ theme }) => theme.fontSize.table};
`;

export const TableContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const ColumnContainer = styled.div`
	width: 100%;
	min-width: 120px;
	display: flex;
	flex-direction: column;
`;

export const ScrollTable = styled.div`
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 1000px) {
		overflow-x: scroll;
	}
	& > div {
		min-width: 100px;
	}
`;

export const Cell = styled.div`
	width: 100%;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const Column = styled.div<{
	id: string;
	sortingKey: string;
}>`
	& > div {
		background-color: ${(p) =>
			p.id === p.sortingKey ? '#E5E5E5' : '#F0F9FA'};
	}
	width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const HeadingCell = styled(Cell)<{
	id: string;
	sortingKey: string;
}>`
	background-color: ${(p) => (p.id === p.sortingKey ? '#093249' : '#46A2C3')};
	color: ${(p) => (p.id === p.sortingKey ? '#F0F9FA' : '#093249')};
	&:hover {
		background-color: ${({ theme }) => theme.colors.button};
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const PageSelectionContainer = styled.div`
	margin: 5px 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const PageChoiceButton = styled.div`
	border-radius: 25px;
	border: 2px solid;
	margin: 0 2%;
	background-color: ${({ theme }) => theme.colors.primary};
	&:hover {
		background-color: ${({ theme }) => theme.colors.button};
	}
`;

export const CurrentPageDisplay = styled.div`
	margin: 0 2%;
	background-color: ${({ theme }) => theme.colors.primary};
`;

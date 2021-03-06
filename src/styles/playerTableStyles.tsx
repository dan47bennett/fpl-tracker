import styled from 'styled-components';

export const SortSelect = styled.select`
	width: 100px;
	margin: 5px auto;
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 10px;
	border: 2px solid;
`;

export const RankingTableContainer = styled.div`
	width: 70%;
	@media only screen and (max-width: 1000px) {
		width: 90%;
	}
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
	max-width: 300px;
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
		min-width: 120px;
	}
`;

export const Cell = styled.div`
	width: 100%;
	height: 20px;
	@media only screen and (min-width: 600px) {
		height: 25px;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const SecondaryCell = styled(Cell)`
	background-color: ${({ theme }) => theme.colors.secondary};
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
	font-size: ${({ theme }) => theme.fontSize.subTitle};
	margin: 10px 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const PageChoiceButton = styled.div`
	border-radius: 5px;
	border: 2px solid;
	margin: 0 1%;
	padding: 2px;
	background-color: ${({ theme }) => theme.colors.secondary};
	&:hover {
		background-color: ${({ theme }) => theme.colors.button};
	}
`;

export const CurrentPageDisplay = styled.div`
	margin: 0;
	background-color: ${({ theme }) => theme.colors.primary};
`;

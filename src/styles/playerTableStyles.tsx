import styled from 'styled-components';

export const RankingTableContainer = styled.div`
	margin: 20px auto;
	width: 95%;
	font-size: ${({ theme }) => theme.fontSize.table};
`;

export const TableContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const ColumnContainer = styled.div<{ width: string }>`
	width: ${(p) => p.width};
	min-width: 120px;
	display: flex;
	flex-direction: column;
`;

export const ScrollTable = styled.div`
	display: flex;
	flex-direction: row;
	overflow-x: scroll;
`;

export const Column = styled.div`
	width: 100%;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const ColumnHeading = styled(Column)<{
	id: string;
	sortingKey: string;
}>`
	background-color: ${(p) => (p.id === p.sortingKey ? '#093249' : '#46A2C3')};
	&:hover {
		background-color: ${({ theme }) => theme.colors.button};
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

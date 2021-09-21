import styled from 'styled-components';

export const TableContainer = styled.div`
	margin: 20px auto;
	width: 90%;
	font-size: ${({ theme }) => theme.fontSize.table};
`;

export const EntryContainer = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.alt};
	height: 30px;
	margin: 2px auto;
	display: flex;
	flex-direction: row;
`;

export const HeadingContainer = styled(EntryContainer)`
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.primary};
`;

export const Column = styled.div<{ width: string }>`
	width: ${(p) => p.width};
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
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

export const ColumnHeading = styled(Column)<{
	id: string;
	sortingKey: string;
	width: string;
}>`
	width: ${(p) => p.width};
	background-color: ${(p) => (p.id === p.sortingKey ? '#093249' : '#46A2C3')};
	&:hover {
		background-color: ${({ theme }) => theme.colors.button};
	}
`;

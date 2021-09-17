import styled from 'styled-components';

export const TableContainer = styled.div`
	margin: 20px auto;
	width: 90%;
	font-size: ${({ theme }) => theme.fontSize.table};
`;

export const EntryContainer = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.alt};
	height: 40px;
	margin: 5px auto;
	display: flex;
	flex-direction: row;
`;

export const HeadingContainer = styled(EntryContainer)`
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.primary};
`;

const Column = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const Heading = styled(Column)<{
	id: string;
	sortingKey: string;
}>`
	background-color: ${(p) => (p.id === p.sortingKey ? '#093249' : '#46A2C3')};
	&:hover {
		background-color: ${({ theme }) => theme.colors.button};
	}
`;

export const NameColumn = styled(Column)`
	width: 20%;
`;
export const NameColumnHeading = styled(Heading)`
	width: 20%;
`;

export const TotalPointsColumn = styled(Column)`
	width: 15%;
`;
export const TotalPointsColumnHeading = styled(Heading)`
	width: 15%;
`;

export const CostColumn = styled(Column)`
	width: 15%;
`;
export const CostColumnHeading = styled(Heading)`
	width: 15%;
`;

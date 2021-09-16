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

export const NameColumn = styled.div`
	width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TotalPointsColumn = styled.div`
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CostColumn = styled.div`
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

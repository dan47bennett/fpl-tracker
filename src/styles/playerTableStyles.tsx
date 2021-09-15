import styled from 'styled-components';

export const EntryContainer = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.alt};
	height: 40px;
	margin: 5px auto;
	display: flex;
	flex-direction: row;
`;

export const NameRow = styled.div`
	width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TotalPoints = styled.div`
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

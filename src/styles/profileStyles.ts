import styled from 'styled-components';

export const PlayerImage = styled.img`
	width: 220px;
	height: 280px;
	margin: 5px auto;
	/* border-radius: 10px;
	border: 2px solid; */
`;

export const ProfileContainer = styled.div`
	width: 100%;
	height: auto;
	min-height: 90vh;
	background-color: ${({ theme }) => theme.colors.button};
	margin: 0;
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`;

export const PlayerInfo = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	/* align-items: center;
	justify-content: center;
	text-align: center; */
`;

export const InfoEntry = styled.div`
	height: 30px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

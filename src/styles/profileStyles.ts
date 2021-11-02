import styled from 'styled-components';

export const PlayerImage = styled.img`
	width: 200px;
	margin: 5px auto;
	border-radius: 10px;
	border: 2px solid;
`;

export const ProfileContainer = styled.div`
	width: 100% - 10px;
	padding: 0 5px;
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
	margin: 5px;
	height: 100%;
	width: 100% - 5px;
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

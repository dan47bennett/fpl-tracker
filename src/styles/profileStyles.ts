import styled from 'styled-components';

export const PlayerImage = styled.img`
	width: 250px;
	margin: 5px auto;
	border-radius: 10px;
	border: 2px solid;
	@media only screen and (max-width: 500px) {
		width: 150px;
		margin-left: 0;
	}
`;

export const ProfileContainer = styled.div`
	width: 100% - 10px;
	margin: 0 5px;
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`;

export const MiniProfile = styled.div`
	margin: 5px;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 600px) {
		width: 100% - 10px;
		flex-direction: row;
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
	align-items: center;
	justify-content: center;
	text-align: center;
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

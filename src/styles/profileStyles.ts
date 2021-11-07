import styled from 'styled-components';

export const ProfileContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0.9),
			rgba(255, 255, 255, 0.1)
		),
		url(${'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'});
	background-repeat: no-repeat;
	background-size: cover;
	margin: 0;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 850px) {
		align-items: center;
		height: 1400px;
	}
	@media only screen and (max-width: 500px) {
		height: 1000px;
		font-size: ${({ theme }) => theme.fontSize.table};
	}
	@media only screen and (max-width: 400px) {
		height: 800px;
	}
`;

export const PlayerInfoBox = styled.div`
	height: calc(100% - 20px);
	width: calc(45% - 20px);
	margin: 10px;
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 1400px) {
		width: calc(55% - 20px);
		margin: 20px 10px;
		height: auto;
	}
	@media only screen and (max-width: 850px) {
		width: 80%;
		height: 50%;
	}
`;

export const StyledPlayerInfoBox = styled(PlayerInfoBox)`
	background-repeat: no-repeat;
	background-size: contain;
	border-radius: 10px;
	border: 1px solid;
	border-color: ${({ theme }) => theme.colors.alt};
	color: ${({ theme }) => theme.colors.alt};
	background-color: ${({ theme }) => theme.colors.transparentButton};
	flex-direction: column;
`;

export const LargerInfoBox = styled(StyledPlayerInfoBox)`
	width: calc(55% - 20px);
	@media only screen and (max-width: 850px) {
		width: 80%;
		height: 60%;
	}
`;

export const QuickStatsBox = styled(LargerInfoBox)`
	@media only screen and (max-width: 850px) {
		height: 40%;
	}
`;

export const PlayerBackground = styled(StyledPlayerInfoBox)`
	width: 60%;
	height: 100%;
	margin: 0;
	background-position: center;
	background-color: ${({ theme }) => theme.colors.transparentButton};
`;

export const InfoBox = styled(StyledPlayerInfoBox)`
	width: 40%;
	height: 100%;
	margin: 0;
	display: flex;
	flex-direction: column;
`;

export const InfoEntry = styled.div`
	background-color: rgba(0, 0, 0, 0);
	margin: auto 5px;
	text-align: center;
`;

export const BadgeImage = styled.img`
	width: 45px;
	height: 45px;
	position: relative;
	left: 10px;
	top: 10px;
	opacity: 90%;
`;

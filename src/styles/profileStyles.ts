import styled from 'styled-components';

export const BadgeImage = styled.img`
	width: 45px;
	height: 45px;
	position: relative;
	left: 10px;
	top: 10px;
	opacity: 90%;
	@media only screen and (max-width: 650px) {
		left: -50px;
	}
	@media only screen and (max-width: 350px) {
		width: 40px;
		height: 40px;
		left: -45px;
	}
`;

export const PlayerBackground = styled.div`
	width: 165px;
	height: 210px;
	margin: 15px;
	margin-right: 0;
	background-repeat: no-repeat;
	background-size: contain;
	border-radius: 10px;
	border: 1px solid;
	border-color: ${({ theme }) => theme.colors.alt};
	background-color: ${({ theme }) => theme.colors.transparentButton};
	@media only screen and (max-width: 650px) {
		margin-left: 0;
		margin-bottom: 5px;
	}
	@media only screen and (max-width: 350px) {
		width: 142px;
		height: 180px;
	}
`;

export const InfoBox = styled.div`
	border-radius: 10px;
	border: 1px solid;
	border-color: ${({ theme }) => theme.colors.alt};
	color: ${({ theme }) => theme.colors.alt};
	margin: 15px 0;
	background-color: ${({ theme }) => theme.colors.transparentButton};
	width: 165px;
	height: 210px;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 350px) {
		width: 142px;
		height: 180px;
	}
	@media only screen and (max-width: 650px) {
		margin-bottom: 5px;
	}
`;

export const LargeInfoBox = styled(InfoBox)`
	width: calc(100% - 40px);
	margin: 15px 20px;
	@media only screen and (max-width: 650px) {
		margin-top: 5px;
	}
`;

export const InfoEntry = styled.div`
	background-color: rgba(0, 0, 0, 0);
	margin: auto auto;
	text-align: center;
`;

export const ProfileContainer = styled.div`
	width: 100%;
	height: auto;
	min-height: 90vh;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0.9),
			rgba(255, 255, 255, 0.1)
		),
		url(${'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'});
	background-repeat: no-repeat;
	background-size: cover;
	margin: 0;
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 650px) {
		flex-direction: column;
		align-items: center;
	}
`;

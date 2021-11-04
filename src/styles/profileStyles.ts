import styled from 'styled-components';

export const BadgeImage = styled.img`
	width: 60px;
	height: 60px;
	position: relative;
	left: 10px;
	top: 10px;
	opacity: 90%;
	@media only screen and (max-width: 600px) {
		left: -70px;
		top: 10px;
	}
`;

export const PlayerBackground = styled.div`
	width: 220px;
	height: 280px;
	margin: 15px;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 10px;
	border: 1px solid;
	border-color: ${({ theme }) => theme.colors.alt};
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
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`;

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

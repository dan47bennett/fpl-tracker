import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const ContainerHorizontalResp = styled.div`
	width: 35%;
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 700px) {
		flex-direction: column;
	}
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const TitleBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.title};
	width: 60%;
	margin: 10px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const TextBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.subTitle};
	width: 60%;
	margin: 10px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const Row = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 500px) {
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`;

export const ResponsiveRow = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

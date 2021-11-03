import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.primary};
	font-size: ${({ theme }) => theme.fontSize.title};
	height: 10vh;
	padding-left: 30px;
	display: flex;
	align-items: center;
	text-align: center;
`;

export const Header: React.FC = () => {
	return <HeaderDiv>FPL Tracker</HeaderDiv>;
};

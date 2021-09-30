import React from 'react';
import {
	CurrentPageDisplay,
	PageChoiceButton,
	PageSelectionContainer,
} from '../../../styles/playerTableStyles';

interface PageSelectionButtonsProps {
	onClickPrev: () => void;
	onClickNext: () => void;
	PageText: number;
}

export const PageSelectionButtons: React.FC<PageSelectionButtonsProps> = ({
	onClickPrev,
	onClickNext,
	PageText,
}) => {
	return (
		<PageSelectionContainer>
			<PageChoiceButton onClick={onClickPrev}>PREV</PageChoiceButton>
			<CurrentPageDisplay>{PageText}</CurrentPageDisplay>
			<PageChoiceButton onClick={onClickNext}>NEXT</PageChoiceButton>
		</PageSelectionContainer>
	);
};

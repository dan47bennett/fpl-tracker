import React from 'react';

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
		<>
			<button onClick={onClickPrev}>Prev</button>
			<div>{PageText}</div>
			<button onClick={onClickNext}>Next</button>
		</>
	);
};

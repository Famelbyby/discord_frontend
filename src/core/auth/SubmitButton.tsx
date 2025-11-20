import React from 'react';
import { ISubmitButtonProps } from '@/src/utils/types/auth';
import '../../styles/components.scss';

export const SubmitButton: React.FC<ISubmitButtonProps> = ({
	isLoading,
	loadingText,
	defaultText,
	onClick,
}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={isLoading}
			className="submit-button"
		>
			{isLoading ? loadingText : defaultText}
		</button>
	);
};

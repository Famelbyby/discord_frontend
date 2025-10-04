import React from 'react';
import { ISubmitButtonProps } from '@/src/utils/types/auth';
import '../../styles/components.scss';

export const SubmitButton: React.FC<ISubmitButtonProps> = ({
	isLoading,
	loadingText,
	defaultText,
}) => {
	return (
		<button type="submit" disabled={isLoading} className="submit-button">
			{isLoading ? loadingText : defaultText}
		</button>
	);
};

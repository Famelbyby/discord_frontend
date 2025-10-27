import React from 'react';
import { IFormContainerProps } from '@/src/utils/types/auth';
import '../../styles/auth.style.scss';

export const FormContainer: React.FC<IFormContainerProps> = ({
	title,
	subtitle,
	children,
}) => {
	return (
		<div className="auth-container auth-container--full-height">
			<div className="auth-header">
				<h2 className="auth-title">{title}</h2>
				<p className="auth-subtitle">{subtitle}</p>
			</div>

			<div className="auth-content">{children}</div>
		</div>
	);
};

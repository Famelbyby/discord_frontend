import React from 'react';
import { IServerErrorProps } from '@/src/utils/types/auth';
import '../../styles/auth.style.scss';

export const ServerError: React.FC<IServerErrorProps> = ({ message }) => {
	if (!message) return null;

	return <div className="server-error">{message}</div>;
};

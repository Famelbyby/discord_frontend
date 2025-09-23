import React from 'react';
import { ServerErrorProps } from '@/src/utils/types/auth';

export const ServerError: React.FC<ServerErrorProps> = ({ message }) => {
	if (!message) return null;

	return (
		<div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
			{message}
		</div>
	);
};

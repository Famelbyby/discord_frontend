import React from 'react';

export const LoadingSkeleton: React.FC = () => {
	return (
		<div className="flex flex-1 min-h-full flex-col justify-center px-6 py-12 lg:px-8 dark:bg-[#101828]">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<div className="mx-auto h-10 w-10 bg-gray-300 rounded animate-pulse"></div>
				<div className="mt-10 h-8 bg-gray-300 rounded animate-pulse"></div>
			</div>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
				{[1, 2, 3, 4].map((i) => (
					<div key={i}>
						<div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
						<div className="h-10 bg-gray-300 rounded animate-pulse"></div>
					</div>
				))}
				<div className="h-10 bg-gray-300 rounded animate-pulse"></div>
			</div>
		</div>
	);
};

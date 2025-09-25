import { useState } from 'react';

/**
 * Function executing callback when there was nothing signals in previous timeout ms
 * @param callback - Function to execute
 * @param timeout - Timeout
 * @returns debounced function
 */
export function useDebounce(
	callback: (...args: any[]) => void,
	timeout: number
) {
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

	return (...args: any) => {
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
		}

		setTimeoutId(
			setTimeout(() => {
				callback(...args);

				setTimeoutId(null);
			}, timeout)
		);
	};
}

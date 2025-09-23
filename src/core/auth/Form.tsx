import React from 'react';
import { FormFieldProps } from '@/src/utils/types/auth';

export const FormField: React.FC<FormFieldProps> = ({
	label,
	type,
	name,
	value,
	onChange,
	placeholder,
	error,
	required = true,
}) => {
	return (
		<div>
			<label
				htmlFor={name}
				className="block text-sm/6 font-medium text-gray-900 dark:text-white"
			>
				{label}
			</label>
			<div className="mt-2">
				<input
					id={name}
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					required={required}
					placeholder={placeholder}
					autoComplete="off"
					className="block w-full rounded-md  px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
				/>
				{error && <p className="mt-1 text-sm text-red-600">{error}</p>}
			</div>
		</div>
	);
};

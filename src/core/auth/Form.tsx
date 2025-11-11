import React from 'react';
import { IFormFieldProps } from '@/src/utils/types/auth';
import '../../styles/auth.style.scss';

export const FormField: React.FC<IFormFieldProps> = ({
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
		<div className="form-field">
			<label htmlFor={name} className="form-field__label">
				{label}
			</label>
			<div className="form-field__input-wrapper">
				<input
					id={name}
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					required={required}
					placeholder={placeholder}
					autoComplete="off"
					className={`form-field__input ${error ? 'form-field__input--error' : ''}`}
				/>
				{error && <p className="form-field__error">{error}</p>}
			</div>
		</div>
	);
};

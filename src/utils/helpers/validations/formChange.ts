import { IErrors } from '../../types/auth';

interface ISetForm {
	name: HTMLInputElement['name'];
	value: HTMLInputElement['value'];
}

export const FormChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	setFormData: (props: ISetForm) => void,
	setErrors?: (name: ISetForm['name']) => void
) => {
	const { name, value } = e.target;

	setFormData({ name, value });
	setErrors?.(name);
};

/**
 *
 * @template T - type of setFormData function
 * @param setFormData - function sets new form data
 * @param setErrors - function sets new errors
 * @returns form handler
 */
export const createFormChangeHandler = <T>(
	setFormData: React.Dispatch<React.SetStateAction<T>>,
	setErrors: React.Dispatch<React.SetStateAction<IErrors>>
) => {
	return (e: React.ChangeEvent<HTMLInputElement>) => {
		FormChange(
			e,
			({ name, value }) => {
				setFormData((prev) => ({
					...prev,
					[name]: value,
				}));
			},
			(name) => {
				setErrors((prev) => {
					const newErrors = { ...prev };
					delete newErrors[name as keyof IErrors];
					return newErrors;
				});
			}
		);
	};
};

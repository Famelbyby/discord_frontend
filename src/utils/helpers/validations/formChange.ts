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

export const createFormChangeHandler = (
	setFormData: React.Dispatch<React.SetStateAction<any>>,
	setErrors: React.Dispatch<React.SetStateAction<any>>
) => {
	return (e: React.ChangeEvent<HTMLInputElement>) => {
		FormChange(
			e,
			({ name, value }) => {
				setFormData((prev: any) => ({
					...prev,
					[name]: value,
				}));
			},
			(name) => {
				setErrors((prev: any) => {
					const newErrors = { ...prev };
					delete newErrors[name];
					return newErrors;
				});
			}
		);
	};
};

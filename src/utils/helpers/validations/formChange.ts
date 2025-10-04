interface ISetForm {
    name: HTMLInputElement['name'];
    value: HTMLInputElement['value'];
}

export const FormChange = (e: React.ChangeEvent<HTMLInputElement>, setFormData: (props: ISetForm) => void, setErrors?: (name: ISetForm['name']) => void) => {
    const { name, value } = e.target;
    
    setFormData({name, value});
    setErrors?.(name);
};


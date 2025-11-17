import SearchInput from '@/src/core/shared/search-input';
import { SearchProps } from '@/src/utils/types/shared/search-input';
import { fireEvent, render, screen } from '@testing-library/react';

const mockedChange = jest.fn(() => {});

const defaultProps: SearchProps = {
	title: 'Users',
	placeholder: 'none',
	value: 'kek',
	changeValue: mockedChange,
};

describe('search input', () => {
	test('renders main sections', () => {
		const { container } = render(<SearchInput {...defaultProps} />);

		expect(screen.queryByText(defaultProps.title)).toBeInTheDocument();
		expect(
			container.querySelector('.search-input__magnifier')
		).toBeInTheDocument();
		expect(
			container.querySelector('.search-input__input')
		).toBeInTheDocument();
	});

	test('should call function', () => {
		const { container } = render(<SearchInput {...defaultProps} />);
		const input = container.querySelector('.search-input__input');

		expect(input).toBeInTheDocument();

		fireEvent.change(input!, { target: { value: 'о' } });

		expect(mockedChange).toHaveBeenCalled();
	});
});

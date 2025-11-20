import { ActionImage } from '@/src/core/shared/action-image';
import { IActionImage } from '@/src/utils/types/shared/user.item';
import { fireEvent, render, screen } from '@testing-library/react';

const mockedClick = jest.fn(() => {});

const defaultProps: IActionImage = {
	onClick: mockedClick,
	src: '/shared/unblock.png',
	alt: 'hehe block',
};

describe('action image', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('renders main sections', () => {
		const { container } = render(<ActionImage {...defaultProps} />);

		expect(
			container.querySelector('.user-actions__img')
		).toBeInTheDocument();
	});

	test('should render with correct props', () => {
		render(<ActionImage {...defaultProps} />);

		expect(screen.getByAltText(defaultProps.alt)).toBeInTheDocument();
		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByTitle(defaultProps.alt)).toBeInTheDocument();
	});

	test('should call click', () => {
		render(<ActionImage {...defaultProps} />);

		const img = screen.getByRole('img');

		expect(img).toBeInTheDocument();

		fireEvent.click(img);

		expect(mockedClick).toHaveBeenCalled();
	});
});

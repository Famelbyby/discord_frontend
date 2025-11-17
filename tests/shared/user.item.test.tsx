import UserItem from '@/src/core/shared/user.item';
import { IUserItem } from '@/src/utils/types/shared/user.item';
import { fireEvent, render, screen } from '@testing-library/react';

const mockedClick = jest.fn(() => {});

const defaultProps: IUserItem<string> = {
	avatarUrl: '/shared/block.png',
	username: 'Alex',
	actions: [
		{
			alt: '',
			meaning: 'kek',
			src: '/shared/unblock.png',
		},
		{
			alt: '',
			meaning: 'kek',
			src: '/shared/reject.png',
		},
	],
	onClick: mockedClick,
};

describe('user item', () => {
	afterAll(() => {
		jest.clearAllMocks();
		render(<></>);
	});

	test('renders main sections', () => {
		const { container } = render(<UserItem<string> {...defaultProps} />);

		expect(screen.queryByText(defaultProps.username)).toBeInTheDocument();
		expect(
			container.querySelector('.user-avatar__img')
		).toBeInTheDocument();
		expect(container.querySelector('.user-actions')).toBeInTheDocument();
	});

	test('should render 2 actions', () => {
		const { container } = render(<UserItem<string> {...defaultProps} />);

		expect(container.querySelectorAll('.user-actions__img').length).toBe(2);
	});

	test('should render click', () => {
		const { container } = render(<UserItem<string> {...defaultProps} />);

		const image = container.querySelectorAll('.user-actions__img')[0];

		fireEvent.click(image);

		expect(mockedClick).toHaveBeenCalled();
	});
});

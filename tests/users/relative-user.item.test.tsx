import RelativeUserItem from '@/src/core/users/relative-user.item';
import { RelativeUsersListMock } from '@/src/mocks/users/relative-users.list';
import { IUserItem } from '@/src/utils/types/shared/user.item';
import {
	IRelativeUserItem,
	RelativeUserActionIconMeaning,
} from '@/src/utils/types/users/relative-user.item';
import { fireEvent, render, screen } from '@testing-library/react';

const mockedUpdateRelation = jest.fn(() => {});

const defaultProps: IRelativeUserItem = {
	relativeUser: RelativeUsersListMock[0],
	updateRelation: mockedUpdateRelation,
};

jest.mock('@/src/core/shared/user.item', () => {
	return {
		__esModule: true,
		default: ({
			username,
			avatarUrl,
		}: IUserItem<RelativeUserActionIconMeaning>) => (
			<div className="user-item" onClick={mockedUpdateRelation}>
				<div className="user-item-username">{username}</div>
				<div className="user-item-avatar">{avatarUrl}</div>
			</div>
		),
	};
});

describe('relative user item', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('renders main sections', () => {
		const { container } = render(<RelativeUserItem {...defaultProps} />);

		expect(container.querySelector('.user-item')).toBeInTheDocument();
		expect(
			container.querySelector('.user-item-username')
		).toBeInTheDocument();
		expect(
			container.querySelector('.user-item-avatar')
		).toBeInTheDocument();
	});

	test('renders with right props', () => {
		render(<RelativeUserItem {...defaultProps} />);

		expect(
			screen.getByText(defaultProps.relativeUser.username)
		).toBeInTheDocument();
		expect(
			screen.getByText(defaultProps.relativeUser.avatarUrl)
		).toBeInTheDocument();
	});

	test('should click on user item', async () => {
		const { container } = render(<RelativeUserItem {...defaultProps} />);
		const item = container.querySelector('.user-item');

		expect(item).toBeInTheDocument();

		fireEvent.click(item!);

		expect(mockedUpdateRelation).toHaveBeenCalled();
	});
});

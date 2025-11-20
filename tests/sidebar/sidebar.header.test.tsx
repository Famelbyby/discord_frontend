import SidebarFriendsHeader from '@/src/core/sidebar/sidebar-friends/sidebar.header';
import { ISidebarFriendsHeader } from '@/src/utils/types/sidebar/sidebar.header';
import { render, screen } from '@testing-library/react';

jest.mock('@/src/fonts/fonts', () => {
	return {
		__esModule: true,
		JURA_FONT: {
			className: '',
		},
		INTER_FONT: {
			className: '',
		},
	};
});

const defaultProps: ISidebarFriendsHeader = {
	incomingsCount: 1,
};

describe('sidebar header', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('renders main sections', () => {
		const { container } = render(
			<SidebarFriendsHeader {...defaultProps} />
		);

		expect(container.querySelector('.sidebar-header')).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-header-logo__img')
		).toBeInTheDocument();
		expect(screen.getByText('АлёГараж')).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-header-add-friends__img')
		).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-header-create-chat__img')
		).toBeInTheDocument();
	});

	test('renders incomings count', () => {
		const { container } = render(
			<SidebarFriendsHeader {...defaultProps} />
		);

		expect(
			container.querySelector('.sidebar-header-incomings-count')
		).toBeInTheDocument();
	});

	test('doesnt render incomings count', () => {
		const { container } = render(
			<SidebarFriendsHeader incomingsCount={0} />
		);

		expect(
			container.querySelector('.sidebar-header-incomings-count')
		).not.toBeInTheDocument();
	});
});

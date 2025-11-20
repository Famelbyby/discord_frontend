import { CustomLink } from '@/src/core/shared/custom.link';
import { ICustomLink } from '@/src/utils/types/shared/custom.link';
import { render, screen } from '@testing-library/react';

const defaultProps: ICustomLink[] = [
	{
		children: <div>children</div>,
		href: 'nothing',
		className: 'lolkek',
	},
	{
		children: <div>children</div>,
		href: 'nothing',
		className: 'lolkek',
		underlined: true,
	},
];

describe('custom link', () => {
	test('renders main sections', () => {
		const { container } = render(<CustomLink {...defaultProps[0]} />);

		expect(screen.queryByText('children')).toBeInTheDocument();
		expect(container.querySelector('.lolkek')).toBeInTheDocument();
	});

	test('should have href attr', () => {
		const { container } = render(<CustomLink {...defaultProps[0]} />);

		const link = container.querySelector('.lolkek');

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', 'nothing');
	});

	test('should have underlined attr', () => {
		const { container } = render(<CustomLink {...defaultProps[1]} />);

		const link = container.querySelector('.lolkek');

		expect(link).toBeInTheDocument();
		expect(link).toHaveStyle('textDecoration: underline');
	});
});

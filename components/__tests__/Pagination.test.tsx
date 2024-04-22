import { render, screen } from '@testing-library/react';
import Pagination from '../Pagination';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn()
}));

describe.only('Pagination Component', () => {
  const setup = (currentPage: number, totalPages: number, darkMode: boolean) => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      replace: jest.fn(x => x)
    }));
    require('react').useContext.mockImplementation(() => ({ darkMode }));

    render(<Pagination currentPage={currentPage} totalPages={totalPages} />);
  };

  it('should render pagination with correct page information', () => {
    setup(1, 5, false);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it('should disable next button on last page', () => {
    setup(5, 5, false);
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  it('should apply dark mode styles if dark mode is enabled', () => {
    setup(1, 5, true);
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toHaveClass('border-gray-50');
  });
});


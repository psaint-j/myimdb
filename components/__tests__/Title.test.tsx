import { screen } from '@testing-library/react';
import Title from '../Title';
import { renderWithContext } from '@/tests';

describe('Title Component', () => {
  it('renders correctly with all props', () => {
    const providerProps = { darkMode: false };
    const genreData = [{ id: 1, name: 'Drama' }, { id: 2, name: 'Thriller' }];
    renderWithContext(<Title title="Example Movie" date="2021-04-15" genre={genreData} />, {contextValues: providerProps});

    expect(screen.getByText('Example Movie (2021)')).toBeInTheDocument();
    expect(screen.getByText('Drama')).toBeInTheDocument();
    expect(screen.getByText('Thriller')).toBeInTheDocument();
  });

  it('handles undefined title and date', () => {
    const providerProps = { darkMode: true };
    renderWithContext(<Title title={undefined} date={undefined} genre={[]} />, { contextValues: providerProps });

    expect(screen.getByTestId('movie-title')).toHaveTextContent('');
  });

  it('applies dark mode styling', () => {
    const providerProps = { darkMode: true };
    const genreData = [{ id: 3, name: 'Horror' }];
    renderWithContext(<Title title="Dark Mode Movie" date="2019-10-31" genre={genreData} />, { contextValues: providerProps });

    const genreElement = screen.getByText('Horror');
    expect(genreElement).toHaveClass('bg-gray-50');
    expect(genreElement).toHaveClass('text-gray-600');
  });

  it('applies light mode styling', () => {
    const providerProps = { darkMode: false };
    const genreData = [{ id: 4, name: 'Comedy' }];
    renderWithContext(<Title title="Light Mode Movie" date="2022-05-22" genre={genreData} />, { contextValues: providerProps });

    const genreElement = screen.getByText('Comedy');
    expect(genreElement).toHaveClass('bg-blue-100');
    expect(genreElement).toHaveClass('text-gray-600');
  });
});

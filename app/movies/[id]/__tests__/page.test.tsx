// Movies.test.js
import { render, screen, waitFor } from '@testing-library/react';
import { useParams } from 'next/navigation';
import '@testing-library/jest-dom';
import useMovieDetails from '@/hooks/useMovieDetails';
import Movies from '../page';
import { ReactNode } from 'react';

// Mocks
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));
jest.mock('@/hooks/useMovieDetails');

jest.mock('swiper/react', () => ({
  Swiper: ({ children }:{children: ReactNode}) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }:{children: ReactNode}) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  ),
}))

jest.mock('swiper/modules', () => ({
  Navigation: ({ children }:{children: ReactNode}) => <div data-testid="swiper-navigation-testid">{children}</div>,
}))

describe('Movies Page', () => {
  it('shows loading state initially', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '123' });
    (useMovieDetails as jest.Mock).mockReturnValue({ movie: null, isLoading: true });

    render(<Movies />);
    expect(screen.getByText(/Chargement.../)).toBeInTheDocument();
  });

  it('renders the movie details correctly', async () => {
    (useParams as jest.Mock).mockReturnValue({ id: '123' });
    (useMovieDetails as jest.Mock).mockReturnValue({
      movie: {
        id: 1,
        title: 'Inception',
        release_date: '2010-07-16',
        genres: [{ id: 1, name: 'Action' }],
        tagline: 'Your mind is the scene of the crime.',
        overview: 'A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
        homepage: 'https://www.inceptionmovie.com/',
        imdb_id: 'tt1375666',
        credits: {
          cast: [{ id: 1, name: 'Leonardo DiCaprio', character: 'Cobb' }]
        }
      },
      isLoading: false
    });

    render(<Movies />);
    await waitFor(() => expect(screen.getByText('Inception (2010)')).toBeInTheDocument());
    expect(screen.getByText(/"Your mind is the scene of the crime."/)).toBeInTheDocument();
    expect(screen.getByText(/Résumé du film/)).toBeInTheDocument();
    expect(screen.getByText('Lien vers le site du film').closest('a')).toHaveAttribute('href', 'https://www.inceptionmovie.com/');
    expect(screen.getByText('Lien vers la page IMDB').closest('a')).toHaveAttribute('href', `https://www.imdb.com/title/tt1375666`);
  });
});

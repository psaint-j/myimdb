import React from 'react';
import { render, screen } from '@testing-library/react';
import People from '../[id]/page';
import usePeople from '@/hooks/usePeople';
import { useParams } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));
jest.mock('@/hooks/usePeople');
jest.mock('@/components/Carousel', () => ({
  MovieCarousel: () => <div>Movie Carousel Mock</div>
}));


describe('People Component', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: '123' });
    process.env.NEXT_PUBLIC_IMAGE_URL = 'http://example.com/';
  });


  it('renders correctly with loaded data', () => {
    (usePeople as jest.Mock).mockReturnValue({
      people: {
        name: 'John Doe',
        known_for_department: 'Acting',
        birthday: '1980-01-01',
        place_of_birth: 'Somewhere',
        biography: 'Some biography text',
        credits: {
          cast: [{ id: 1, title: 'Movie 1' }]
        }
      },
      picture: {
        width: 300,
        height: 450,
        file_path: '/path/to/image.jpg'
      },
      isLoading: false
    });
    render(<People />);

    expect(screen.getByText("John Doe (Acting)")).toBeInTheDocument();
    expect(screen.getByText('1980-01-01 Somewhere')).toBeInTheDocument();
    expect(screen.getByText(/Some biography text/i)).toBeInTheDocument();
    expect(screen.getByText('Movie Carousel Mock')).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/_next/image?url=http%3A%2F%2Fexample.com%2Fw300%2Fpath%2Fto%2Fimage.jpg&w=640&q=75');
    expect(image).toHaveAttribute('alt', 'John Doe');
  });

  it('displays loading state when data is being fetched', () => {
    (usePeople as jest.Mock).mockReturnValue({ isLoading: true });

    render(<People />);
    expect(screen.getByText(/Chargement.../i)).toBeInTheDocument();
  });
});

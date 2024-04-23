import { screen, render } from '@testing-library/react';
import Rating from '@/components/Rating';

describe('Rating Component', () => {
  it('displays the rounded rating correctly', () => {
    render(<Rating vote={8.76} />);
    const ratingText = screen.getByText('8.8 / 10');
    expect(ratingText).toBeInTheDocument();
  });

  it('rounds the rating to the nearest tenth as needed', () => {
    render(<Rating vote={8.23} />);
    const ratingText = screen.getByText('8.2 / 10');
    expect(ratingText).toBeInTheDocument();
  });

  it('displays a perfect score of 10', () => {
    render(<Rating vote={10} />);
    const ratingText = screen.getByText('10 / 10');
    expect(ratingText).toBeInTheDocument();
  });

  it('displays a minimum score of 0', () => {
    render(<Rating vote={0} />);
    const ratingText = screen.getByText('0 / 10');
    expect(ratingText).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import UserInformation from './UserInformation';

describe('UserInformation', () => {
  it('renders the user information correctly', () => {
    const user = {
      name: 'John Doe',
      avatarURL: 'https://example.com/avatar.jpg',
      answered: 10,
      asked: 5,
      total: 15,
    };

    render(<UserInformation user={user} />);

    // Check if the user's name is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();

    // Check if the user's avatar is rendered
    const avatarImage = screen.getByAltText('');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage.src).toBe('https://example.com/avatar.jpg');

    // Check if the answered and asked scores are rendered
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    // Check if the total score is rendered
    expect(screen.getByText('Score')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
  });
});

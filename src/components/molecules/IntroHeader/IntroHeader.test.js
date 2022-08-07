import { render, screen } from '@testing-library/react';
import IntroHeader from './IntroHeader';

test('renders the introHeader', () => {
    render(<IntroHeader />);
    
    expect(screen.getByRole("heading")).toHaveTextContent(/Consent Banner Performance/);
  });
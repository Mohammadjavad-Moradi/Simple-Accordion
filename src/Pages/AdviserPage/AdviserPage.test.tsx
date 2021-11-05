import { render, screen } from '@testing-library/react';
import AdviserPage from './AdviserPage.component';

describe('AdviserPage accordion', () => {
  test('existance of adviser button', () => {
    render(<AdviserPage />);
    const adviserButton = screen.getByRole('button', { name: 'Adviser' });
    expect(adviserButton).toBeInTheDocument;
  });
});

import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header.component';
describe('header functionality', () => {
  test('login button exist when user is null, go to the login page when clicked', () => {
    render(
      <Router>
        <Header user={null} />
      </Router>
    );
    const loginButton = screen.getByRole('link', { name: 'login page' });
    expect(loginButton).toBeInTheDocument;

    userEvent.click(loginButton);
    expect(window.location.pathname).toBe('/login');
  });

  test('adviserButton exist when user logged in and go to adviser page on click', () => {
    render(
      <Router>
        <Header user="mohammad" />
      </Router>
    );
    const adviserButton = screen.getByRole('link', { name: 'adviser page' });
    expect(adviserButton).toBeInTheDocument;
    userEvent.click(adviserButton);
    expect(window.location.pathname).toBe('/adviser');
  });
});

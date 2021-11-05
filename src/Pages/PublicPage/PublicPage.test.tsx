import { render, screen } from '@testing-library/react';
import PublicPage from './PublicPage.component';
import userEvent from '@testing-library/user-event';

describe('publicPage tests for accordions', () => {
  test('existance of three accordion when user not logged in', () => {
    render(<PublicPage user={null} />);
    const allAccordions = screen.getAllByRole('button', {
      name: 'If you or your child were born in the UK',
    });
    const ReferenceButtons = screen.queryAllByRole('button', {
      name: /refernece/i,
    });
    expect(allAccordions).toHaveLength(3);
    expect(ReferenceButtons).not.toBeInTheDocument;

    //open the first accordion and check for close button existance
    userEvent.click(allAccordions[0]);
    const closeButton = screen.getByRole('button', {
      name: 'close button accordion 1',
    });
    expect(closeButton).toBeInTheDocument;

    //click on the close button to collapse accordion
    userEvent.click(closeButton);
    expect(closeButton).not.toBeInTheDocument;
  });

  test('existance of reference button on the accordions when user logged in', () => {
    render(<PublicPage user="mohammad" />);
    const referenceButtons = screen.getAllByRole('button', {
      name: 'Reference',
    });
    expect(referenceButtons).toHaveLength(3);
  });

  test('open third accodrion and expect to be closed when open the second accordion', () => {
    render(<PublicPage user={null} />);
    const allAccordions = screen.getAllByRole('button', {
      name: 'If you or your child were born in the UK',
    });
    //open third accordion and check its close button exists
    userEvent.click(allAccordions[2]);
    expect(screen.getByRole('button', { name: 'close button accordion 3' }))
      .toBeInTheDocument;

    // open second accordion and check the third one is closed
    userEvent.click(allAccordions[1]);
    expect(screen.getByRole('button', { name: 'close button accordion 3' })).not
      .toBeInTheDocument;
    expect(screen.getByRole('button', { name: 'close button accordion 2' }))
      .toBeInTheDocument;
  });
});

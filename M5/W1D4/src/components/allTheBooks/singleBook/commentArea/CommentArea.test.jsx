import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, vi, beforeEach } from 'vitest';
import CommentArea from './CommentArea';
import { SelectedBookContext } from '../../../../context/SelectedBookContext';

vi.mock('./commentList/CommentList', () => ({ default: () => <div data-testid="comment-list" /> }));
vi.mock('./addComment/AddComment', () => ({ default: () => <div data-testid="add-comment" /> }));
vi.mock('../../../../utils/mySpinner/MySpinner', () => ({ default: () => <div data-testid="my-spinner" /> }));
vi.mock('../../../../utils/myAlert/MyAlert', () => ({ default: ({ message }) => <div data-testid="my-alert">{message}</div> }));

vi.mock('../../../../hooks/useWindowSize', () => ({
  useWindowSize: () => 1024,
}));

describe('CommentArea component', () => {

  beforeEach(() => {
    vi.clearAllMocks()
    global.fetch = vi.fn(() => Promise.resolve({
      ok: true,
      json: async () => ([]),
    }))
  })

  it('renders CommentArea with child components', async () => {

    const mockSelectedBook = { title: 'Test Book' };

    render(
      <SelectedBookContext.Provider value={{ isSelected: mockSelectedBook }}>
        <CommentArea asin="123" />
      </SelectedBookContext.Provider>
    )

    await waitFor(() => {

      const commentList = screen.getByTestId('comment-list');

      expect(commentList).toBeInTheDocument();


      const addComment = screen.getByTestId('add-comment');

      expect(addComment).toBeInTheDocument();


      const bookTitle = screen.getByText('Test Book');

      expect(bookTitle).toBeInTheDocument();

    });

  })

})
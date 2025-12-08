import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import EditComment from './EditComment';
import toast from 'react-hot-toast';
import { ThemeContext } from '../../../../../../../context/ThemeContext';
import userEvent from '@testing-library/user-event';

vi.mock('react-hot-toast', () => { const toast = { success: vi.fn(), error: vi.fn(), loading: vi.fn(), custom: vi.fn(), }; return { default: toast, toast: toast, Toaster: () => null, }; });

global.fetch = vi.fn();

describe('testing EditComment component', () => {

  const mockReview = {
    _id: "123",
    comment: "Comment",
    rate: 5,
    elementId: "Book"
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders EditComment component', () => {
    render(
      <ThemeContext.Provider value={{ isDark: true }}>
        <EditComment
          review={mockReview}
          getReviews={vi.fn()}
        />
      </ThemeContext.Provider>
    )

    const editCommentBtn = screen.getByRole("button", { name: "Edit this comment" })

    const editCommentInput = screen.getByTestId("edit-comment-input-test")



    expect(editCommentBtn)
      .toBeInTheDocument()

    expect(editCommentInput)
      .toBeInTheDocument()

  })

  it("should call edit api", async () => {

    const mockGetReviews = vi.fn()

    render(
      <ThemeContext.Provider value={{ isDark: true }}>
        <EditComment
          review={mockReview}
          getReviews={mockGetReviews}
        />
      </ThemeContext.Provider>
    )

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => ({ success: true })
      })
    )

    const editCommentBtn = screen.getByRole("button", { name: "Edit this comment" })

    await userEvent.click(editCommentBtn)

    await waitFor(() => { expect(toast.success).toHaveBeenCalledWith("Comment edited successfully!", expect.any(Object)); });

  })

})
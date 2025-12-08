import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import EditComment from './EditComment';
import toast from 'react-hot-toast';

vi.mock('react-hot-toast', () => { const toast = { success: vi.fn(), error: vi.fn(), loading: vi.fn(), custom: vi.fn(), }; return { default: toast, toast: toast, Toaster: () => null, }; });

import userEvent from '@testing-library/user-event';

describe('testing EditComment component', () => {

  it('renders EditComment component', () => {
    render(
      <EditComment
        review={[]}
        getReviews={vi.fn()}
      />
    )

    const editCommentBtn = screen.getByRole("button", { name: "Edit this comment" })

    const editCommentInput = screen.getByTestId("edit-comment-input-test")



    expect(editCommentBtn)
      .toBeInTheDocument()

    expect(editCommentInput)
      .toBeInTheDocument()

  })

  it("should call edit api", async () => {

    beforeEach(() => {
      vi.clearAllMocks()
    })

    const mockGetReviews = vi.fn()
    const mockReview = [{}]

    render(
      <EditComment
        review={mockReview}
        getReviews={mockGetReviews}
      />
    )

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => ({ success: true })
      })
    )

    const mockRenderSuccessToast = vi.fn()

    const editCommentBtn = screen.getByRole("button", { name: "Edit this comment" })

    await userEvent.click(editCommentBtn)

    await waitFor(() => { expect(toast.success).toHaveBeenCalledWith("Comment edited successfully!", expect.any(Object)); });

  })

})
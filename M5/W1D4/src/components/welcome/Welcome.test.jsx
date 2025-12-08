import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Welcome from './Welcome'

describe("testing Welcome component", () => {

  it("renders hero homepage", () => {

    render(
      <Welcome />
    )

    const welcomeImg = screen.getByAltText("hero picture")

    expect(welcomeImg)
      .toBeInTheDocument()
      .toHaveClass("object-fit-cover")

    const welcomeArchedText = screen.getByTestId("arched-text")
    
    expect(welcomeArchedText)
      .toBeInTheDocument()

    const welcomeHeroBottomText = screen.getByTestId("hero-bottom-text")

    expect(welcomeHeroBottomText)
      .toBeInTheDocument()

  })

})
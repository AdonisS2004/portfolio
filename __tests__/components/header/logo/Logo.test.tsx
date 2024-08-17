import { render, screen } from  '@testing-library/react'
import Logo from '@/app/components/header/logo'

describe('Logo', () => {
    it('should have home text', () => {
        render(<Logo/>) // ARRANGE
    
        const myElem = screen.getByRole("link") // ACT
    
        expect(myElem).toBeInTheDocument() // ASSERT
    })
})

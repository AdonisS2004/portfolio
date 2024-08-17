import { render, screen } from  '@testing-library/react'
import Navigation from '@/app/components/header/navigation'

describe('Navigation', () => {
    it('should have nav', () => {
        render(<Navigation />) // ARRANGE
    
        const myElem = screen.getByRole('navigation') // ACT
    
        expect(myElem).toBeInTheDocument() // ASSERT
    })
})

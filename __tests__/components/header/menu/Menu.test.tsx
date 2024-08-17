import { render, screen } from  '@testing-library/react'
import Menu from '@/app/components/header/menu'

describe('Menu', () => {
    it('should have home text', () => {
        render(<Menu isMenuOpen={false}/>) // ARRANGE
    
        const myElem = screen.getByText("HOME") // ACT
    
        expect(myElem).toBeInTheDocument() // ASSERT
    })
})

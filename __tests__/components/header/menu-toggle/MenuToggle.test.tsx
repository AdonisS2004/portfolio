import { render, screen } from  '@testing-library/react'
import MenuToggle from '@/app/components/header/menu-toggle'

describe('MenuToggle', () => {
    it('should have MenuToggle', () => {
        render(<MenuToggle isMenuOpen={true} toggleMenu={() => {}}/>) // ARRANGE
    
        const myElem = screen.getByRole('button') // ACT
    
        expect(myElem).toBeInTheDocument() // ASSERT
    })
})

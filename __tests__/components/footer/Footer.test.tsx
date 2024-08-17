import {render, screen } from "@testing-library/react"
import Footer from "@/app/components/footer"

describe( 'Footer', () => {
    it('Should contain footer text', () => {
        render(<Footer />)
        const myElem = screen.getByRole("paragraph")
        expect(myElem).toBeInTheDocument()
    })
})
import { render } from  '@testing-library/react'
import Header from '@/app/components/header'

describe('Header', () => {
    it('remains header unchanged', () => {
        const { container } = render(<Header />)
        expect(container).toMatchSnapshot()
    })
})
import { render } from  '@testing-library/react'
import Header from '@/app/components/header'
import Head from 'next/head'

describe('Header', () => {
    it('remains header unchanged', () => {
        const { container } = render(<Header />)
        expect(container).toMatchSnapshot()
    })
})
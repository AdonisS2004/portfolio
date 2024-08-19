import { render } from "@testing-library/react";
import Landing from "@/app/pages/landing/page";

describe('Landing page', () => {
    it('Should remain unchanges', () => {
        const { container } = render(<Landing />)
        expect(container).toMatchSnapshot()
    })
})
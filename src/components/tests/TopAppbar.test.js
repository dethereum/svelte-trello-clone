import { render } from '@testing-library/svelte'

import TopAppbar from '../TopAppbar.svelte'


describe('TopAppbar', () => {
    it('renders correctly', () => {
        const { container } = render(TopAppbar)
        
        expect(container.firstChild).toMatchSnapshot();
    })
})
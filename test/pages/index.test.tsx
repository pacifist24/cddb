import { render, screen } from '@testing-library/react'

import Home from '../../src/pages/index'

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />)
    screen.getByText('aaa').click()
    screen.debug()
  })
})

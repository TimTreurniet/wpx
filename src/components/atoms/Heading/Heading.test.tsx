import { render, screen } from '@testing-library/react'
import { HeadingInterface } from './Heading.interface'
import Heading from './Heading'
import { HeadingMock } from './Heading.mock'

/// TODO: fix test based upon interface
const testID = "Heading-" + Math.floor(Math.random()*90000) + 10000

describe("Heading", () => {

    it("Can render Heading", () => {
        render(<Heading testID={ testID } { ...HeadingMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
import { render, screen } from '@testing-library/react'
import { IconButtonInterface } from './IconButton.interface'
import IconButton from './IconButton'
import { IconButtonMock } from './IconButton.mock'

/// TODO: fix test based upon interface
const testID = "IconButton-" + Math.floor(Math.random()*90000) + 10000

describe("IconButton", () => {

    it("Can render IconButton", () => {
        render(<IconButton testID={ testID } { ...IconButtonMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
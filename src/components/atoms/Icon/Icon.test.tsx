import { render, screen } from '@testing-library/react'
import { IconInterface } from './Icon.interface'
import Icon from './Icon'
import { IconMock } from './Icon.mock'

/// TODO: fix test based upon interface
const testID = "Icon-" + Math.floor(Math.random()*90000) + 10000

describe("Icon", () => {

    it("Can render Icon", () => {
        render(<Icon testID={ testID } { ...IconMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
import { render, screen } from '@testing-library/react'
import { TopbarInterface } from './Topbar.interface'
import Topbar from './Topbar'
import { TopbarMock } from './Topbar.mock'

/// TODO: fix test based upon interface
const testID = "Topbar-" + Math.floor(Math.random()*90000) + 10000

describe("Topbar", () => {

    it("Can render Topbar", () => {
        render(<Topbar testID={ testID } { ...TopbarMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
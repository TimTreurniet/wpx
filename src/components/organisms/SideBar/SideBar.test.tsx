import { render, screen } from '@testing-library/react'
import { SideBarInterface } from './SideBar.interface'
import SideBar from './SideBar'
import { SideBarMock } from './SideBar.mock'

/// TODO: fix test based upon interface
const testID = "SideBar-" + Math.floor(Math.random()*90000) + 10000

describe("SideBar", () => {

    it("Can render SideBar", () => {
        render(<SideBar testID={ testID } { ...SideBarMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
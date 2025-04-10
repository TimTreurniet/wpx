import { render, screen } from '@testing-library/react'
import { ProfileIconInterface } from './ProfileIcon.interface'
import ProfileIcon from './ProfileIcon'
import { ProfileIconMock } from './ProfileIcon.mock'

/// TODO: fix test based upon interface
const testID = "ProfileIcon-" + Math.floor(Math.random()*90000) + 10000

describe("ProfileIcon", () => {

    it("Can render ProfileIcon", () => {
        render(<ProfileIcon testID={ testID } { ...ProfileIconMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
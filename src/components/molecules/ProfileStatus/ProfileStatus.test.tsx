import { render, screen } from '@testing-library/react'
import { ProfileStatusInterface } from './ProfileStatus.interface'
import ProfileStatus from './ProfileStatus'
import { ProfileStatusMock } from './ProfileStatus.mock'

/// TODO: fix test based upon interface
const testID = "ProfileStatus-" + Math.floor(Math.random()*90000) + 10000

describe("ProfileStatus", () => {

    it("Can render ProfileStatus", () => {
        render(<ProfileStatus testID={ testID } { ...ProfileStatusMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
import { render, screen } from '@testing-library/react'
import { StatusIconInterface } from './StatusIcon.interface'
import StatusIcon from './StatusIcon'
import { StatusIconMock } from './StatusIcon.mock'

/// TODO: fix test based upon interface
const testID = "StatusIcon-" + Math.floor(Math.random()*90000) + 10000

describe("StatusIcon", () => {

    it("Can render StatusIcon", () => {
        render(<StatusIcon testID={ testID } { ...StatusIconMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
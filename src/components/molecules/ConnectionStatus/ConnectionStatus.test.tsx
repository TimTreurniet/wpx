import { render, screen } from '@testing-library/react'
import { ConnectionStatusInterface } from './ConnectionStatus.interface'
import ConnectionStatus from './ConnectionStatus'
import { ConnectionStatusMock } from './ConnectionStatus.mock'

/// TODO: fix test based upon interface
const testID = "ConnectionStatus-" + Math.floor(Math.random()*90000) + 10000

describe("ConnectionStatus", () => {

    it("Can render ConnectionStatus", () => {
        render(<ConnectionStatus testID={ testID } { ...ConnectionStatusMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
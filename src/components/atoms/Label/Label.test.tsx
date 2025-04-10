import { render, screen } from '@testing-library/react'
import { LabelInterface } from './Label.interface'
import Label from './Label'
import { LabelMock } from './Label.mock'

/// TODO: fix test based upon interface
const testID = "Label-" + Math.floor(Math.random()*90000) + 10000

describe("Label", () => {

    it("Can render Label", () => {
        render(<Label testID={ testID } { ...LabelMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
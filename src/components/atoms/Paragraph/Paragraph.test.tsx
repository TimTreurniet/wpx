import { render, screen } from '@testing-library/react'
import { ParagraphInterface } from './Paragraph.interface'
import Paragraph from './Paragraph'
import { ParagraphMock } from './Paragraph.mock'

/// TODO: fix test based upon interface
const testID = "Paragraph-" + Math.floor(Math.random()*90000) + 10000

describe("Paragraph", () => {

    it("Can render Paragraph", () => {
        render(<Paragraph testID={ testID } { ...ParagraphMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
import { render, screen } from '@testing-library/react'
import { LogoInterface } from './Logo.interface'
import Logo from './Logo'
import { LogoMock } from './Logo.mock'

const testID = "Logo-" + Math.floor(Math.random()*90000) + 10000

describe("Logo", () => {

    it("Can render Logo", () => {
        render(<Logo testID={ testID } { ...LogoMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
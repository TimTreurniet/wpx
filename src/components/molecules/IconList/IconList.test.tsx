import { render, screen } from '@testing-library/react'
import { IconListInterface } from './IconList.interface'
import IconList from './IconList'
import { IconListMock } from './IconList.mock'

/// TODO: fix test based upon interface
const testID = "IconList-" + Math.floor(Math.random()*90000) + 10000

describe("IconList", () => {

    it("Can render IconList", () => {
        render(<IconList testID={ testID } { ...IconListMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
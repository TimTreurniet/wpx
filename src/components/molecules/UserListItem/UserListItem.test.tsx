import { render, screen } from '@testing-library/react'
import { UserListItemInterface } from './UserListItem.interface'
import UserListItem from './UserListItem'
import { UserListItemMock } from './UserListItem.mock'

/// TODO: fix test based upon interface
const testID = "UserListItem-" + Math.floor(Math.random()*90000) + 10000

describe("UserListItem", () => {

    it("Can render UserListItem", () => {
        render(<UserListItem testID={ testID } { ...UserListItemMock } />)
        const defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})
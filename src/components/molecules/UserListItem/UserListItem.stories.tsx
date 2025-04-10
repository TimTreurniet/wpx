//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import UserListItemSrc from './UserListItem'
// import { UserListItemInterface } from './UserListItem.interface'
import { UserListItemMock } from './UserListItem.mock'

/// TODO: Adapt Stories
const UserListItemMeta: Meta<typeof UserListItemSrc> = {
    title: "molecules/UserListItem",
    component: UserListItemSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof UserListItemSrc>
export const UserListItem: Story = {
    args: { ...UserListItemMock }
}

export default UserListItemMeta
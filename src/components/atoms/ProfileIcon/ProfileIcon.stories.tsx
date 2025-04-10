//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ProfileIconSrc from './ProfileIcon'
// import { ProfileIconInterface } from './ProfileIcon.interface'
import { ProfileIconMock } from './ProfileIcon.mock'

/// TODO: Adapt Stories
const ProfileIconMeta: Meta<typeof ProfileIconSrc> = {
    title: "atoms/ProfileIcon",
    component: ProfileIconSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof ProfileIconSrc>
export const ProfileIcon: Story = {
    args: { ...ProfileIconMock }
}

export default ProfileIconMeta
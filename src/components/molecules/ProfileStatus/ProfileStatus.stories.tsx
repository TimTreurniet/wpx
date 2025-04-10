//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ProfileStatusSrc from './ProfileStatus'
// import { ProfileStatusInterface } from './ProfileStatus.interface'
import { ProfileStatusMock } from './ProfileStatus.mock'

/// TODO: Adapt Stories
const ProfileStatusMeta: Meta<typeof ProfileStatusSrc> = {
    title: "molecules/ProfileStatus",
    component: ProfileStatusSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof ProfileStatusSrc>
export const ProfileStatus: Story = {
    args: { ...ProfileStatusMock }
}

export default ProfileStatusMeta
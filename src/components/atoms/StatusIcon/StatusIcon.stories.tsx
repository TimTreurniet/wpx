//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import StatusIconSrc from './StatusIcon'
// import { StatusIconInterface } from './StatusIcon.interface'
import { StatusIconMock } from './StatusIcon.mock'

/// TODO: Adapt Stories
const StatusIconMeta: Meta<typeof StatusIconSrc> = {
    title: "atoms/StatusIcon",
    component: StatusIconSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof StatusIconSrc>
export const StatusIcon: Story = {
    args: { ...StatusIconMock }
}

export default StatusIconMeta
//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ConnectionStatusSrc from './ConnectionStatus'
// import { ConnectionStatusInterface } from './ConnectionStatus.interface'
import { ConnectionStatusMock } from './ConnectionStatus.mock'

/// TODO: Adapt Stories
const ConnectionStatusMeta: Meta<typeof ConnectionStatusSrc> = {
    title: "molecules/ConnectionStatus",
    component: ConnectionStatusSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof ConnectionStatusSrc>
export const ConnectionStatus: Story = {
    args: { ...ConnectionStatusMock }
}

export default ConnectionStatusMeta
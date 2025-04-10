//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import IconButtonSrc from './IconButton'
// import { IconButtonInterface } from './IconButton.interface'
import { IconButtonMock } from './IconButton.mock'

/// TODO: Adapt Stories
const IconButtonMeta: Meta<typeof IconButtonSrc> = {
    title: "atoms/IconButton",
    component: IconButtonSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof IconButtonSrc>
export const IconButton: Story = {
    args: { ...IconButtonMock }
}

export default IconButtonMeta
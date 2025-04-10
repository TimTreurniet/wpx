//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import IconSrc from './Icon'
// import { IconInterface } from './Icon.interface'
import { IconMock } from './Icon.mock'

/// TODO: Adapt Stories
const IconMeta: Meta<typeof IconSrc> = {
    title: "atoms/Icon",
    component: IconSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof IconSrc>
export const Icon: Story = {
    args: { ...IconMock }
}

export default IconMeta
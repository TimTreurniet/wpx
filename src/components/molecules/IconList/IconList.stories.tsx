//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import IconListSrc from './IconList'
// import { IconListInterface } from './IconList.interface'
import { IconListMock } from './IconList.mock'

/// TODO: Adapt Stories
const IconListMeta: Meta<typeof IconListSrc> = {
    title: "molecules/IconList",
    component: IconListSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof IconListSrc>
export const IconList: Story = {
    args: { ...IconListMock }
}

export default IconListMeta
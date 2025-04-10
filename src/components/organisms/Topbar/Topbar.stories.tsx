//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TopbarSrc from './Topbar'
// import { TopbarInterface } from './Topbar.interface'
import { TopbarMock } from './Topbar.mock'

/// TODO: Adapt Stories
const TopbarMeta: Meta<typeof TopbarSrc> = {
    title: "organisms/Topbar",
    component: TopbarSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof TopbarSrc>
export const Topbar: Story = {
    args: { ...TopbarMock }
}

export default TopbarMeta
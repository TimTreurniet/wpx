//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SideBarSrc from './SideBar'
// import { SideBarInterface } from './SideBar.interface'
import { SideBarMock } from './SideBar.mock'

/// TODO: Adapt Stories
const SideBarMeta: Meta<typeof SideBarSrc> = {
    title: "organisms/SideBar",
    component: SideBarSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof SideBarSrc>
export const SideBar: Story = {
    args: { ...SideBarMock }
}

export default SideBarMeta
//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import LogoSrc from './Logo'
// import { LogoInterface } from './Logo.interface'
import { LogoMock } from './Logo.mock'

/// TODO: Adapt Stories
const LogoMeta: Meta<typeof LogoSrc> = {
    title: "atoms/Logo",
    component: LogoSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof LogoSrc>
export const Logo: Story = {
    args: { ...LogoMock }
}

export default LogoMeta
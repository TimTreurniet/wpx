//import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ParagraphSrc from './Paragraph'
// import { ParagraphInterface } from './Paragraph.interface'
import { ParagraphMock } from './Paragraph.mock'

/// TODO: Adapt Stories
const ParagraphMeta: Meta<typeof ParagraphSrc> = {
    title: "atoms/Paragraph",
    component: ParagraphSrc,
    argTypes: {
        testID: { table: { disable: true } }
    }
}

type Story = StoryObj<typeof ParagraphSrc>
export const Paragraph: Story = {
    args: { ...ParagraphMock }
}

export default ParagraphMeta
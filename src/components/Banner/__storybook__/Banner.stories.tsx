import { Meta, StoryObj } from "@storybook/react";
import Banner from "..";

const meta = {
    title: 'Components/A simple banner',
    component: Banner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { summary: 'info | congrats | documentation | danger'},
    }
} satisfies Meta<typeof Banner>

export default meta;

type Story = StoryObj<typeof meta>

export const Info: Story = {
    args: {
        variant: 'info',
        children: <p>Informative Banner</p>
    }
}

export const Congrats: Story = {
    args: {
        variant: 'congrats',
        children: <p>Congratulations Banner</p>
    }
}

export const Documentation: Story = {
    args: {
        variant: 'documentation',
        children: <p>Documentation Banner</p>
    }
}

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: <p>Danger Banner</p>
    }
}
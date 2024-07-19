import { Meta, StoryObj } from "@storybook/react";
import TranslatedText from "..";
import { ComponentProps } from "react";
import { Card, CardContent } from "@mui/material";

const meta = {
    title: 'Basic Components/Translated Text',
    component: TranslatedTypography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { summary: 'body1 | body2 | button | caption | h1 | h2 | h3 | h4 | h5 | h6 | inherit | overline | subtitle1 | subtitle2' }
    }
} satisfies Meta<typeof TranslatedText>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'default-translation-text',
        variant: 'body1'
    }
}

export const Title: Story = {
    args: {
        children: 'default-translation-text',
        variant: 'h1'
    }
}

type Props = ComponentProps<typeof TranslatedText>

function TranslatedTypography(props : Props){
    return <Card>
        <CardContent>
        <TranslatedText {...props}/>
        </CardContent>
    </Card>
}

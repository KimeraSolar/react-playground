import { Meta, StoryObj } from "@storybook/react";
import TotalsLineCard from "..";

const meta = {
    title: 'Dashboard/Totals & Line Card',
    component: TotalsLineCard,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof TotalsLineCard>

export default meta;

type Story = StoryObj<typeof meta>

export const TotalsLineChart: Story = {
    args: {
        title: 'Totals & Line Chart',
        data: [
            {
                x: 1, y: 2400
            },
            {
                x: 2, y: 1398
            },
            {
                x: 3, y: 9800
            },
            {
                x: 4, y: 3908
            },
            {
                x: 5, y: 4800
            },
            {
                x: 6, y: 3800
            },
            {
                x: 7, y: 4300
            }
        ],
        primaryValue: 3705
    }
}
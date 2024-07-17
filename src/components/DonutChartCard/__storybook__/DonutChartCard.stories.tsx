import { Meta, StoryObj } from "@storybook/react";
import DonutChartCard from "..";

const meta = {
    title: 'Dashboard/Donut Chart Card',
    component: DonutChartCard,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DonutChartCard>

export default meta;

type Story = StoryObj<typeof meta>

export const DonutChart: Story = {
    args: {
        data: [{
            argument: 'data 1',
            value: 54
        },
        {
            argument: 'data 2',
            value: 46
        }],
        label: 'Total',
        centralValue: 100
    }
}
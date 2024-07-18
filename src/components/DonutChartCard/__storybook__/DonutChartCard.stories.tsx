import { Meta, StoryObj } from "@storybook/react";
import DonutChartCard from "..";
import { getThemeConfigurations } from "../../../theme";

const theme = getThemeConfigurations('light');

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
        title: 'Donut chart',
        subtitle: 'This is a donut chart',
        data: [
            {
                argument: 'data 1',
                value: 54,
                color: theme.palette.primary.main
            },
            {
                argument: 'data 2',
                value: 46,
                color: theme.palette.secondary.main
            },
            {
                argument: 'data 3',
                value: 78,
                color: theme.palette.info.main
            }
        ],
        label: 'Total',
        centralValue: 100
    }
}
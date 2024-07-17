import { PieChart } from '@mui/x-charts/PieChart';
import { Card, CardContent, Typography } from "@mui/material";
import CenterText from './CenterText';

type ChartProps = {
    data: Array<{argument: string, value: any}>
    label?: string;
    centralValue?: number
}


export default function DonutChartCard({data, label, centralValue} : ChartProps) {
    const size = {
        width: 500,
        height: 300,
      };

    return <Card>
        <CardContent>
            <Typography variant='h4'>
                Donut Chart
            </Typography>
            <PieChart series={[{ data, innerRadius: 100 }]} {...size}>
                <CenterText label={label} value={centralValue}/>
            </PieChart>
        </CardContent>
    </Card>
}
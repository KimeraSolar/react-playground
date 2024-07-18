import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";

type TotalsLineCardProps = {
    title: string;
    data: Array<{x: number | string, y: number}>;
    primaryValue: number;
}

export default function TotalsLineCard({ title, data, primaryValue } : TotalsLineCardProps){
    const theme = useTheme();

    const xData = data.map((item) => item.x);
    const yData = data.map((item) => item.y);

    return <Card>
        <CardContent sx={{padding: '24px'}}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>{title}</Typography>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <LineChart
                    width={400}
                    height={150}
                    series={[{ data: yData, color: theme.palette.text.secondary}]}
                    xAxis={[{ scaleType: 'band', data: xData, disableLine: true, disableTicks: true }]}
                    yAxis={[{ disableTicks: true }]}
                />
                <Typography sx={{fontSize: '2.5em'}}>{primaryValue}</Typography>
            </Box>
        </CardContent>
    </Card>
}
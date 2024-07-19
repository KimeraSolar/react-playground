import { Box, CardContent, useTheme, Zoom } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import CardWithTooltip from "../CardWithTooltip";
import TranslatedTypography from "../TranslatedTypography";

type TotalsLineCardProps = {
    title: string;
    data: Array<{x: number | string, y: number}>;
    primaryValue: number;
} 

export default function TotalsLineCard({ title, data, primaryValue } : TotalsLineCardProps){
    const theme = useTheme();

    const xData = data.map((item) => item.x);
    const yData = data.map((item) => item.y);

    return <CardWithTooltip 
            tooltipProps={
                {
                    tooltipTitle: title, 
                    tooltipBody: "card-totals-line-tooltip-body",
                    TransitionComponent: Zoom,
                    arrow: true,
                    placement: "top-end",
                    describeChild: true,
                }
            } 
            >
            <CardContent sx={{padding: '24px'}}>
                <TranslatedTypography variant="h4" sx={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>{title}</TranslatedTypography>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <LineChart
                        width={400}
                        height={150}
                        series={[{ data: yData, color: theme.palette.text.secondary}]}
                        xAxis={[{ scaleType: 'band', data: xData, disableLine: true, disableTicks: true }]}
                        yAxis={[{ disableTicks: true }]}
                    />
                    <TranslatedTypography sx={{fontSize: '2.5em'}}>{primaryValue.toString()}</TranslatedTypography>
                </Box>
            </CardContent>
    </CardWithTooltip>
}
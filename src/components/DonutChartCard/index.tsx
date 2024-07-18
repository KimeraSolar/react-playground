import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import CenterText from './CenterText';
import DataLabel from './DataLabel';
import { ReactNode } from 'react';

type DataType = {
    argument: string, 
    value: any, 
    color?: string
}

type ChartProps = {
    title: string | ReactNode;
    subtitle?: string | ReactNode;
    data: Array<DataType>;
    label?: string;
    centralValue?: number,
    selectedItem?: DataType;
    setSelectedItem?: (item: DataType) => void ;
}


export default function DonutChartCard({data, label, centralValue, title, subtitle, setSelectedItem, selectedItem} : ChartProps) {
    const theme = useTheme();

    const size = {
        height: 400,
      };

    return <Card>
        <CardContent>
            <Typography variant='h4'>
                {title}
            </Typography>
            <Typography variant='overline' color={theme.palette.text.secondary}>
                {subtitle}
            </Typography>
            <Box sx={{
                alignItems: 'center'
            }}>
                <PieChart 
                    series={[
                        { 
                            data, 
                            innerRadius: 75, 
                            paddingAngle: 2, 
                            cornerRadius: 2 , 
                            outerRadius: 130
                        }
                    ]}
                    sx={{
                        marginLeft: '100px'
                    }}
                    onItemClick={(_event, d) => setSelectedItem && setSelectedItem(data[d.dataIndex]) }
                    {...size}
                >
                    <CenterText label={label} value={centralValue}/>
                </PieChart>
                <Box sx={
                    {
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '100%'
                    }
                }>
                    {data.map((item) => (
                        <DataLabel key={item.argument} {...item} isSelected={item.argument === selectedItem?.argument}/>
                    ))}
                </Box>
            </Box>
        </CardContent>
    </Card>
}
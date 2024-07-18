
import { useDrawingArea } from '@mui/x-charts';
import { styled } from '@mui/material';

const StyledLabel = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 12,
}));

const StyledValue = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterValue({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledValue x={left + width / 2} y={top + height / 2 - 10}>
        {children}
        </StyledValue>
    );
}  

function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledLabel x={left + width / 2} y={top + height / 2 + 10}>
        {children}
        </StyledLabel>
    );
}

export default function CenterText({label, value} : {label?: string, value?: number}){
    return <>
        <PieCenterValue>{value}</PieCenterValue>
        <PieCenterLabel>{label}</PieCenterLabel>
    </>
}
import { Box, Typography } from "@mui/material";

type DataLabelProps = {
    argument: string;
    value: number;
    color?: string;
    isSelected?: boolean;
}

export default function DataLabel({ argument, value, color, isSelected}: DataLabelProps){
    return <Box 
        sx={
            {
                display: "flex",
                alignItems: "baseline"
            }
        }
    >
        {
            color && 
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 9 9"
                fill="none"
            >
                <circle cx="4.5" cy="4.8689" r="4" fill={color} />
            </svg>
        }
        <Typography variant="caption" sx={{ paddingLeft: color ? 1 : 0, display: 'block', fontWeight: isSelected ? 'bold' : 'regular'}}>{value} {argument}</Typography>
    </Box>
}
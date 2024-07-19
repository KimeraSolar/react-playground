import { Card, CardProps, Tooltip, TooltipProps } from "@mui/material";
import TranslatedTypography from "../TranslatedTypography";

type CardWithTooltipProps = {
    tooltipProps: Omit<{
        tooltipTitle: string,
        tooltipBody?: string
    } & TooltipProps, 'children' | 'title'>
} & CardProps

export default function CardWithTooltip(props : CardWithTooltipProps){
    const { children, tooltipProps, ...cardProps } = props;
    const { tooltipTitle, tooltipBody, ...htmlTooltipProps} = tooltipProps;
    return <Card {...cardProps}>
        <Tooltip 
            {...htmlTooltipProps}
            title={
                <>
                    <TranslatedTypography variant="h6" sx={{fontSize: '500'}}>{tooltipTitle}</TranslatedTypography>
                    {
                        tooltipBody &&
                        <TranslatedTypography variant="body2">{tooltipBody}</TranslatedTypography>
                    }
                </>
            }
        >
            <span>{children}</span>
        </Tooltip>
    </Card>
}
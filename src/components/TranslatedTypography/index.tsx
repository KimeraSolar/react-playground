import { Typography, TypographyProps } from "@mui/material";
import { Trans } from "react-i18next";

type TranslatedTypographyProps = {
    
} & TypographyProps

export default function TranslatedTypography({children, ...typographyProps} : TranslatedTypographyProps){
    return <Typography {...typographyProps}>
        <Trans>
            {children}
        </Trans>
    </Typography>
}
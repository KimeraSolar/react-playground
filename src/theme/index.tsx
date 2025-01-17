import { PaletteMode } from "@mui/material";

export const getThemeConfigurations = (mode: PaletteMode) => ({
    typography: {
        fontFamily: [
            'Lato',
            'Roboto',
            'Arial',
            'sans-serif'
        ].join(','),
    },
    palette: {
        mode,
        ...(
            mode === 'light' ? 
            {
                background: {
                    default: '#FAFAFA',
                    paper: '#FFFFFF',
                },
                text: {
                    primary: '#1E1E1E',
                    secondary: '#7F7F7F'
                },
                error: {
                    main: '#CB2100'
                },
                warning: {
                    main: '#ED6C02'
                },
                info: {
                    main: '#0288D1'
                },
                success: {
                    main: '#2A8615'
                },
                primary: {
                    main: '#134351'
                },
                secondary: {
                    main: '#E64A19'
                },
            } : 
            {
                text: {
                    secondary: '#7F7F7F'
                },
                error: {
                    main: '#EF2525'
                },
                warning: {
                    main: '#FFA726'
                },
                info: {
                    main: '#0277BD'
                },
                success: {
                    main: '#2E7D32'
                },
                primary: {
                    main: '#287592'
                },
                secondary: {
                    main: '#C35633'
                }
            }
        ),

    }
})
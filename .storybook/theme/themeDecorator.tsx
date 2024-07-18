import React from "react"
import { createTheme, css, Theme, ThemeProvider } from "@mui/material/styles";
import { getThemeConfigurations } from '../../src/theme'
import styled from "@emotion/styled";


const ThemeBlock = styled.div<{ $left?: boolean; $fill?: boolean, $theme?: Theme}>(
  ({ $left, $fill, $theme }) =>
    css`
      position: absolute;
      overflow: auto;
      left: ${$left || $fill ? 0 : '50vw'};
      right: ${$left ? '50vw' : 0};
      bottom: 0;
      top: 0;
      height: 100vh;
      width: ${$fill ? '100vw' : '50vw'};
      background-color: ${$theme?.palette.background.default || '#fff'};
      /* Posiciona o elemento renderizado no meio da tela */
      .story-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `
)

export default function ThemeDecorator(StoryFn, { globals, viewMode }) {
  const { theme } = globals;
  const lightTheme = createTheme(getThemeConfigurations('light'));
  const darkTheme = createTheme(getThemeConfigurations('dark'));

  if(viewMode === 'docs'){
    // Não modifica a visualização no modo 'Docs'
    return <ThemeProvider theme={lightTheme}>
      <StoryFn />
    </ThemeProvider>
  } 

  switch (theme) {
    // Faz os modos de visualização 'Side by side' onde visualiza as versões dark e light ao mesmo tempo
    case 'side-by-side': {
      return (
        <>
          <ThemeProvider theme={lightTheme}>
              <ThemeBlock $left $theme={lightTheme}>
                <div className="story-container">
                  <StoryFn />
                </div>
              </ThemeBlock>
          </ThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <ThemeBlock $theme={darkTheme}>
              <div className="story-container">
                <StoryFn />
              </div>
            </ThemeBlock>
          </ThemeProvider>
        </>
      )
    }
    default: {
      const themeProvider = theme === 'dark' ? darkTheme : lightTheme;
      return (
        <ThemeProvider theme={themeProvider}>
            <ThemeBlock $fill $theme={themeProvider}>
              <div className="story-container">
                <StoryFn className='story-class' />
              </div>
            </ThemeBlock>
        </ThemeProvider>
      )
    }
  }
}
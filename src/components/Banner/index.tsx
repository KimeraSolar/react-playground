/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from "@emotion/react";
import { ReactNode } from "react";
import variantStyles from './styles';

type propTypes = {
    variant: "info" | "congrats" | "documentation" | "danger";
    children: ReactNode;
};

export default function Banner({ variant = "info", children } : propTypes) {
    
      return <aside
          css={{
            margin: "1.5rem auto",
            borderRadius: "0px 10px 10px 0px",
            padding: "0.8em 1em",
            lineHeight: "1.2",
            textAlign: "center",
            position: "relative",
            clear: "both",
            maxWidth: "500px",
            ...variantStyles[variant],
          } as Interpolation<Theme>}
        >{children}</aside>;
}
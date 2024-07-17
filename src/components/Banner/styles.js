/** @jsxImportSource @emotion/react */
const beforeStyles = {
    width: 35,
    height: 35,
    display: "inline-flex",
    justifyContent: "center",
    position: "absolute",
    left: "-1.2rem",
    borderRadius: "50%",
    alignItems: "center",
    top: "-0.8rem",
};
const variantStyles = {
    info: {
    borderLeft: "4px solid #b4aaff",
    backgroundColor: "rgba(224, 226, 255, 0.5)",
    color: "#2a2135",
    "&:before": {
        content: '"🔑"',
        backgroundColor: "#b4aaff",
        ...beforeStyles,
    },
    },
    danger: {
    borderLeft: "4px solid #ff7828",
    backgroundColor: "rgb(253, 236, 234)",
    "&:before": {
        content: '"⚠️"',
        backgroundColor: "#ff7828",
        ...beforeStyles,
    },
    },
    congrats: {
    borderLeft: "4px solid #72bc23",
    backgroundColor: "rgb(249, 253, 234)",
    "&:before": {
        content: '"🎉"',
        backgroundColor: "#72bc23",
        ...beforeStyles,
    },
    },
    documentation: {
    borderLeft: "4px solid #44a9ba",
    backgroundColor: "rgb(234, 248, 253);",
    "&:before": {
        content: '"📚"',
        backgroundColor: "#44a9ba",
        ...beforeStyles,
    },
    },
};

export default variantStyles;
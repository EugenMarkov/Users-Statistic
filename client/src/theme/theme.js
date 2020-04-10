import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1440,
    },
  },
  typography: {
    h2: {
      fontSize: 32,
      fontWeight: 700,
      marginTop: 24,
      marginBottom: 24,
      lineHeight: "39px",
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      marginTop: 24,
      marginBottom: 24,
      lineHeight: "29px",
    },
  },

  overrides: {
    MuiContainer: {
      root: {},
      maxWidthXl: {
        paddingRight: 130,
        paddingLeft: 130,
      },
      maxWidthSm: {
        paddingRight: 10,
        paddingLeft: 10,
      },
      maxWidthMd: {
        paddingRight: 24,
        paddingLeft: 24,
      },
    },
    MuiTypography: {
      root: {
        fontFamily: `"Montserrat", sans-serif`,
      },
      body1: {
        fontFamily: `"Montserrat", sans-serif`,
        lineHeight: 1,
      },
      h2: {
        fontFamily: `"Montserrat", sans-serif`,
      },
      h3: {
        fontFamily: `"Montserrat", sans-serif`,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8,
      },
    },
    MuiTableCell: {
      root: {
        minHeight: 32,
        maxHeight: 48,
        maxWidth: 310,
        padding: "6px 24px",
        fontSize: 16,
        fontFamily: `"Montserrat", sans-serif`,
        lineHeight: "20px",
        borderBottom: "none",
        borderRight: "1px solid #FFFFFF",
        "&:last-child": {
          borderRight: "none",
        },
      },
      head: {
        color: "#FFFFFF",
      },
    },
    MuiFab: {
      secondary: {
        backgroundColor: "var(--decoration-color)",
        "&:hover": {
          backgroundColor: "var(--secondary-color)",
        },
      },
    },
    MuiPagination: {
      ul: {
        "&>li": {
          marginRight: 3,
          marginLeft: 3,
          border: "1px solid #F1F1F1",
          borderRadius: 8,
          "&:first-child": {
            border: "none",
          },
          "&:last-child": {
            border: "none",
          },
        },
      },
    },
    MuiPaginationItem: {
      root: {
        fontFamily: `"Montserrat", sans-serif`,
        fontSize: 16,
        minHeight: 48,
        minWidth: 48,
        margin: 0,
        padding: 0,
        lineHeight: 3,
        borderRadius: 7,
      },
      page: {
        "&.Mui-selected": {
          color: "#FFFFFF",
          backgroundColor: "var(--decoration-color)",
          "&:hover": {
            backgroundColor: "var(--decoration-color) !important",
          },
          "&.Mui-focusVisible": {
            backgroundColor: "var(--decoration-color)",
          },
        },
        "&:hover": {
          backgroundColor: "none",
        },
        "&.Mui-disabled>svg": {
          color: "black",
        },
      },
      icon: {
        color: "var(--decoration-color)",
        fontSize: 48,
      },
      sizeSmall: {
        borderRadius: 8,
      },
    },

    MuiOutlinedInput: {
      root: {
        borderRadius: 10,
      },
      notchedOutline: {
        border: "1px solid #F1F1F1",
        borderColor: "#F1F1F1",
      },
      adornedEnd: {
        paddingRight: 3,
      },
    },
    MuiInputBase: {
      root: {
        fontFamily: `"Montserrat", sans-serif`,
      },
    },
  },
});

export default theme;

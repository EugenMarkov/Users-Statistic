import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 80,
    paddingBottom: 16,
    backgroundImage: `url("/img/pricing_bg.svg")`,
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
  },
  title: {
    maxWidth: 580,
    margin: "0 auto 24px",
    textAlign: "center",
  },
  title_span: {
    fontWeight: 400,
  },
  descr: {
    textAlign: "center",
    maxWidth: 720,
    margin: "0 auto",
    marginBottom: 32,
    fontSize: 20,
    lineHeight: "28px",
    color: "#7E7E7E"
  },
  descr_span: {
    color: "var(--decoration-color)",
    fontWeight: 700,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 380,
    height: 627,
    background: "#FFFFFF",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
    borderRadius: 32,
    [theme.breakpoints.down("xl")]: {
      width: 330,
      marginBottom: 32,
    },
    [theme.breakpoints.down("md")]: {
      width: 320,
    },
    [theme.breakpoints.down("sm")]: {
      width: 290,
    }
  },
  card_container: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    }
  },
  card_title: {
    marginTop: 32,
    marginBottom: 19,
    fontWeight: 600,
  },
  card_price_big: {
    color: "var(--decoration-color)",
    fontSize: 56,
    marginTop: 16,
    marginBottom: 15,
  },
  card_price: {
    fontSize: 48,
    marginTop: 16,
    marginBottom: 24,
  },
  card_descr: {
    fontSize: 16,
    marginTop: 24,
    marginBottom: 24,
    paddingRight: 30,
    paddingLeft: 30,
    lineHeight: "26px",
    textAlign: "center",
    color: "#7E7E7E"
  },
  card_link: {
    width: 221,
    height: 56,
    color: "#ffffff",
    textDecoration: "none",
    background: "var(--decoration-color)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  }
}));

export default useStyles;

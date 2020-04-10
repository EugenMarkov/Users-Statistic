import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 16,
    paddingBottom: 80,
  },
  title: {
    maxWidth: 465,
    margin: "0 auto 24px",
    textAlign: "center",
  },
  title_span: {
    fontWeight: 400,
  },
  descr: {
    textAlign: "center",
    maxWidth: 780,
    margin: "0 auto",
    marginBottom: 40,
    fontSize: 20,
    lineHeight: "28px",
    color: "#7E7E7E"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 380,
    height: 323,
    background: "#FFFFFF",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
    borderRadius: 32,
    [theme.breakpoints.down("xl")]: {
      width: 330,
      marginBottom: 40,
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
  card_img: {
    marginTop: 48,
    width: 106,
    height: 96,
    backgroundImage: `url("/img/Vector.svg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  shape1: {
    position: "absolute",
    top: 15,
    left: 26,
  },
  shape2: {
    position: "absolute",
    top: 45,
    left: 54,
  },
  shape3: {
    position: "absolute",
    top: 51,
    left: 40,
  },
  shape4: {
    position: "absolute",
    top: 55,
    left: 49,
  },
  shape5: {
    position: "absolute",
    top: 23,
    left: 61,
  },
  card_title: {
    marginTop: 40,
    marginBottom: 16,
    fontWeight: 600,
  },
  card_descr: {
    fontSize: 16,
    marginTop: 0,
    marginBottom: 16,
    paddingRight: 20,
    paddingLeft: 20,
    lineHeight: "23px",
    textAlign: "center",
    color: "#7E7E7E"
  },
  shape6: {
    position: "absolute",
    top: 17,
    left: 29,
  },
  shape7: {
    position: "absolute",
    top: 46,
    left: 44,
  },
  shape8: {
    position: "absolute",
    top: 30,
    left: 63,
  },
  shape9: {
    position: "absolute",
    top: 21,
    left: 57,
  },
  shape10: {
    position: "absolute",
    top: 21,
    left: 26,
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    background: "linear-gradient(93.19deg, #255D8B 2.29%, #3A80BA 96.79%)",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  text_block: {
    paddingTop: 76,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "#FFFFFF",
    maxWidth: 465,
    margin: "0  0 16px 0",
  },
  descr: {
    maxWidth: 580,
    margin: "0  0 24px 0",
    fontSize: 16,
    lineHeight: "23px",
    color: "#FFFFFF",
  },
  block_link: {
    width: 221,
    height: 56,
    color: "var(--decoration-color)",
    textDecoration: "none",
    background: "#ffffff",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
  },
  img_wrapper: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  img_block: {
    padding: 25,
    width: 520,
    height: 360,
    background: "linear-gradient(135.04deg, #FFFFFF 1.29%, #D0D0D0 80.1%)",
    borderRadius: 22,
    position: "absolute",
    top: -22,
    right: -45,
    border: "1px solid #EAEAEA"
  },
  img_block_picture: {
    width: "100%",
    height: "100%",
    backgroundImage: `url("/img/Nout.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    border: "1px solid #EAEAEA"
  },
  img_block_bottom: {
    width: 520,
    height: 25,
    background: "#DADADA",
    position: "absolute",
    bottom: -14,
    right: -1,
    border: "1px solid #EAEAEA"
  },
  img_block_base: {
    position: "absolute",
    bottom: -63,
    right: "calc(50% - (680px / 2))",
  },
  img_block_keyboard: {
    position: "absolute",
    bottom: -56,
    right: "calc(50% - (623px / 2))",
  },
  img_block_trackpad: {
    position: "absolute",
    bottom: -63,
    right: "calc(50% - (282px / 2))",
  },

}));

export default useStyles;

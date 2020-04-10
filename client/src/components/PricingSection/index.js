import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import { Link } from "react-router-dom";
import useStyles from "./useStyles";


const PricingSection = () => {
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Container maxWidth={matches ? "xl" : "md"}>
        <Typography variant="h2" className={classes.title}>
          Afforadble Pricing and Packages
          <span className={classes.title_span}> choose your best one</span>
        </Typography>
        <p className={classes.descr}>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
        <div className={classes.card_container}>
          <Card className={classes.card}>
            <Typography variant="h3" className={classes.card_title}>Basic</Typography>
            <img src="/img/Pricing1.svg" alt="pricing" />
            <h1 className={classes.card_price}>$29</h1>
            <svg width="250" height="1" viewBox="0 0 250 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="250" y2="0.5" stroke="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="1" x2="250" y2="0.999856" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#DADADA" stopOpacity="0" />
                  <stop offset="0.504736" stopColor="#DADADA" />
                  <stop offset="1" stopColor="#DADADA" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p className={classes.card_descr}>
              Push Notifications
              <br />
              Data Transfer
              <br />
              SQL Database
              <br />
              Search & SEO Analytics
              <br />
              24/7 Phone Support
              <br />
              2 months technical support
              <br />
              2+ profitable keyword
            </p>
            <Link to="/" className={classes.card_link}>Purchase now</Link>
          </Card>
          <Card className={classes.card}>
            <Typography variant="h3" className={classes.card_title}>Standard</Typography>
            <img src="/img/Pricing2.svg" alt="pricing" />
            <h1 className={classes.card_price_big}>$149</h1>
            <svg width="250" height="1" viewBox="0 0 250 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="250" y2="0.5" stroke="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="1" x2="250" y2="0.999856" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#DADADA" stopOpacity="0" />
                  <stop offset="0.504736" stopColor="#DADADA" />
                  <stop offset="1" stopColor="#DADADA" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p className={classes.card_descr}>
              Push Notifications
              <br />
              Data Transfer
              <br />
              SQL Database
              <br />
              Search & SEO Analytics
              <br />
              24/7 Phone Support
              <br />
              2 months technical support
              <br />
              2+ profitable keyword
            </p>
            <Link to="/" className={classes.card_link}>Purchase now</Link>
          </Card>
          <Card className={classes.card}>
            <Typography variant="h3" className={classes.card_title}>Unlimited</Typography>
            <img src="/img/Pricing3.svg" alt="pricing" />
            <h1 className={classes.card_price}>$39</h1>
            <svg width="250" height="1" viewBox="0 0 250 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="250" y2="0.5" stroke="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="1" x2="250" y2="0.999856" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#DADADA" stopOpacity="0" />
                  <stop offset="0.504736" stopColor="#DADADA" />
                  <stop offset="1" stopColor="#DADADA" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p className={classes.card_descr}>
              Push Notifications
              <br />
              Data Transfer
              <br />
              SQL Database
              <br />
              Search & SEO Analytics
              <br />
              24/7 Phone Support
              <br />
              2 months technical support
              <br />
              2+ profitable keyword
            </p>
            <Link to="/" className={classes.card_link}>Purchase now</Link>
          </Card>
        </div>
        <p className={classes.descr}>
          If you need custom services or Need more?
          <span className={classes.descr_span}> Contact us</span>
        </p>
      </Container>
    </section>
  );
};


export default PricingSection;

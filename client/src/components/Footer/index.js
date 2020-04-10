import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

import "./styles.scss";

const Footer = () => {
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));

  return (
    <footer className="footer">
      <Container maxWidth={matches ? "xl" : "md"}>
        <div className="footer_container">
          <Link to="/" className="footer_logo">
            AppCo
          </Link>
          {matches && <span className="footer_text">All rights reserved by ThemeTags</span>}
          <span className="footer_text">Copyrights © 2019.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

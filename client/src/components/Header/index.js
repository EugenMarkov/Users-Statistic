import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

import "./styles.scss";

const Header = () => {
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));

  return (
    <header className="header">
      <Container maxWidth={matches ? "xl" : "md"}>
        <div className="header_container">
          <Link to="/" className="header_logo">
            AppCo
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;

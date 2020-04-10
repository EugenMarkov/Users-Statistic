import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from '@material-ui/core/InputAdornment';
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

import "./styles.scss";

const FooterMain = () => {
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));

  return (
    <footer className="main_footer">
      <Container maxWidth={matches ? "xl" : "md"}>
        <div className="main_footer_subscribe">
          <OutlinedInput
            className="main_footer_subscribe_input"
            placeholder="Enter your email"
            inputProps={{pattern: "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,64}"}}
            endAdornment={(
              <InputAdornment position="end">
                <button
                  type="submit"
                  onClick={()=> alert("You successfully subscribed")}
                  className={matches ? "main_footer_subscribe_input_btn" : "main_footer_subscribe_input_btn_adaptive"}
                >
                  Subscribe
                </button>
              </InputAdornment>
            )}
          />
        </div>
        <div className="main_footer_container">
          <Link to="/" className="main_footer_container_logo">
            AppCo
          </Link>
          {matches && <span className="footer_text">All rights reserved by ThemeTags</span>}
          <span className="footer_text">Copyrights © 2019.</span>
        </div>
      </Container>
    </footer>
  );
};

export default FooterMain;

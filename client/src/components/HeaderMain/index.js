import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

import "./styles.scss";

const HeaderMain = () => {
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));
  const match = useMediaQuery(theme => theme.breakpoints.up("lg"));
  const phone = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <header className="header_main">
      <Container maxWidth={matches ? "xl" : "md"}>
        <div className="header_main_container">
          <div className="header_main_text_block">
            <Link to="/" className="header_main_text_block_logo">AppCo</Link>
            <h1 className={phone ? "header_main_text_block_title" : "header_main_text_block_title--adaptive"}>
              <span className="header_main_text_block_title_span">Brainstorming </span>
              for desired perfect Usability
            </h1>
            <p className="header_main_text_block_descr">
              Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
            </p>
            <Link to="/users" className="header_main_text_block_link">View Stats</Link>
          </div>
          {match && (
          <div className="header_main_img_block">
            <div className="header_main_img_block_wrapper">
              <div className="header_main_img_block_wrapper_outer_decoration_left" />
              <div className="header_main_img_block_wrapper_outer_decoration_right" />
              <div className="header_main_img_block_wrapper_outer_decoration_bottom" />
              <div className="header_main_img_block_picture">
                <div className="header_main_img_block_picture_inner_decoration">
                  <div className="header_main_img_block_picture_inner_decoration_item" />
                </div>
              </div>
            </div>
          </div>
         )}
        </div>
      </Container>
    </header>
  );
};

export default HeaderMain;

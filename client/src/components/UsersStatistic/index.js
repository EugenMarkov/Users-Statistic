import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import HomeIcon from "@material-ui/icons/Home";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import UsersStatisticTable from "./UsersStatisticTable";

import "./styles.scss";

const UsersStatistic = () => {
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));
  const match = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <section className="statistic">
      <Container maxWidth={matches ? "xl" : "md"}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link to="/" className="breadcrumbs_link">
            {matches ? "Main page" : <HomeIcon />}
          </Link>
          <Link to="/users" className={match ? "breadcrumbs_link breadcrumbs_link--active" : "breadcrumbs_link--small breadcrumbs_link--active"}>
            User statistics
          </Link>
        </Breadcrumbs>
        <Typography variant="h2">Users statistics</Typography>
        <UsersStatisticTable />
      </Container>
    </section>
  );
};

export default UsersStatistic;

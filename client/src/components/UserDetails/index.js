import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TableContainer from "@material-ui/core/TableContainer";
import HomeIcon from "@material-ui/icons/Home";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import axios from "axios";
import Preloader from "../Preloader";

import "./styles.scss";


const UserDetails = () => {
  const [userData, setUserData] = useState( [{ first_name: "", last_name: ""}]);
  const [preloader, setPreloader] = useState(true);
  const params = useParams();
  const history = useHistory();
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));
  const match = useMediaQuery(theme => theme.breakpoints.up("sm"));

  useEffect(() => {
    axios
      .get(`/api/users/${params.id}?start=2019-10-01&end=2019-10-07`)
      .then(res => {
        if(res.data.message === "success") {
          setUserData(res.data.userStatistic);
          setPreloader(false);
        } else {
          history.push("/");
        }
      })
      .catch(error => {
        setPreloader(false);
        history.push("/");
        console.log(error);
      });
  }, [history, params.id]);

  return ( preloader ? <Preloader /> : (
    <section className="user_details">
      <Container maxWidth={matches ? "xl" : "md"}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link to="/" className="breadcrumbs_link">
            {matches ? "Main page" : <HomeIcon />}
          </Link>
          <Link to="/users" className={match ? "breadcrumbs_link" : "breadcrumbs_link--small"}>
            User statistics
          </Link>
          <span className={match ? "breadcrumbs_link breadcrumbs_link--active" : "breadcrumbs_link--small breadcrumbs_link--active"}>
            {`${userData[0].first_name} ${userData[0].last_name}`}
          </span>
        </Breadcrumbs>
        <Typography variant="h2">{`${userData[0].first_name} ${userData[0].last_name}`}</Typography>
        <Typography variant="h3">Clicks</Typography>
        <TableContainer component={Paper} className="user_details_chart_wrapper">
          <LineChart width={1080} height={250} data={userData}>
            <CartesianGrid vertical={false} stroke="#CCCCCC" />
            <XAxis dataKey="date" stroke="#CCCCCC" />
            <YAxis dataKey="clicks" stroke="#CCCCCC" axisLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#3A80BA"
              activeDot={{ r: 9 }}
              strokeWidth="4"
              dot={false}
              legendType="none"
            />
          </LineChart>
        </TableContainer>
        <Typography variant="h3">Views</Typography>
        <TableContainer component={Paper} className="user_details_chart_wrapper">
          <LineChart width={1080} height={250} data={userData}>
            <CartesianGrid vertical={false} stroke="#CCCCCC" />
            <XAxis dataKey="date" stroke="#CCCCCC" />
            <YAxis dataKey="page_views" stroke="#CCCCCC" axisLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="page_views"
              stroke="#3A80BA"
              activeDot={{ r: 9 }}
              strokeWidth="4"
              dot={false}
              legendType="none"
            />
          </LineChart>
        </TableContainer>
      </Container>
    </section>
  ));
};

export default UserDetails;

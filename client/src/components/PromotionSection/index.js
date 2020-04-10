import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import useStyles from "./useStyles";


const PromotionSection = () => {
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Container maxWidth={matches ? "xl" : "md"}>
        <Typography variant="h2" className={classes.title}>
          <span className={classes.title_span}>Why </span>
            small business owners love
          <span className={classes.title_span}> AppCo?</span>
        </Typography>
        <p className={classes.descr}>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
        <div className={classes.card_container}>
          <Card className={classes.card}>
            <div className={classes.card_img}>
              <img src="/img/ShapeCloud1.png" alt="shape" className={classes.shape1} />
              <img src="/img/ShapeCloud2.png" alt="shape" className={classes.shape2} />
              <img src="/img/ShapeCloud3.png" alt="shape" className={classes.shape3} />
              <img src="/img/ShapeCloud4.png" alt="shape" className={classes.shape4} />
              <img src="/img/ShapeCloud5.png" alt="shape" className={classes.shape5} />
            </div>
            <Typography variant="h3" className={classes.card_title}>Clean Design</Typography>
            <p className={classes.card_descr}>Increase sales by showing true dynamics of your website.</p>
          </Card>
          <Card className={classes.card}>
            <div className={classes.card_img}>
              <img src="/img/ShapeLock1.png" alt="shape" className={classes.shape6} />
              <img src="/img/ShapeLock2.png" alt="shape" className={classes.shape7} />
              <img src="/img/ShapeLock3.png" alt="shape" className={classes.shape8} />
              <img src="/img/ShapeLock4.png" alt="shape" className={classes.shape9} />
            </div>
            <Typography variant="h3" className={classes.card_title}>Secure Data</Typography>
            <p className={classes.card_descr}>Build your online store’s trust using Social Proof & Urgency.</p>
          </Card>
          <Card className={classes.card}>
            <div className={classes.card_img}>
              <img src="/img/ShapeScreens.png" alt="shape" className={classes.shape10} />
            </div>
            <Typography variant="h3" className={classes.card_title}>Retina Ready</Typography>
            <p className={classes.card_descr}>Realize importance of social proof in customer’s purchase decision.</p>
          </Card>
        </div>
      </Container>
    </section>

  );
};


export default PromotionSection;

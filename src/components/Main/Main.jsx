import React from "react";
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance $10000</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: "1.5em", marginTop: "20px" }}>
          Try Saying: Add income........
        </Typography>
        <Divider />
        <Form />
      </CardContent>

      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>

    </Card>
  )
}

export default Main;
import React from 'react';
import { Grid } from "@material-ui/core";
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: "100vh" }}>

        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense"/>
        </Grid>

      </Grid>

      <PushToTalkButtonContainer>
        <PushToTalkButton size="4em"/>
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;

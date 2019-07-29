import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinkUI from '@material-ui/core/Link';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SideBar from '../components/SideBar';
import Coupons from '../components/Coupons';
import Profile from '../components/Profile';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <LinkUI color="inherit" href="https://errands.com/">
        Errands
      </LinkUI>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#CEECF2',
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    // height: '100vh',
    paddingTop: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: '80vh'
  },
  appBarSpacer: theme.mixins.toolbar
}));

function Dashboard(props) {
  const { user, isAuthenticated } = props.auth;
  console.log(isAuthenticated, user);

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <SideBar />
      <div className={classes.appBarSpacer} />

      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* greeting */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1> Welcome to your Dashboard {user.name} !!!</h1>
              </Paper>
            </Grid>
            {/* coupons */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Coupons />
              </Paper>
            </Grid>
            {/* profile */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {' '}
                <Profile />{' '}
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <MadeWithLove />
      </main>
    </div>
  );
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

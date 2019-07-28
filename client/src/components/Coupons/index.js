import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/actions';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: '10px',
    backgroundColor: '#394D59',
    color: 'white'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14,
    color: 'white'
  },
  button: {
    fontSize: 12,
    color: 'white'
  },
  pos: {
    marginBottom: 12
  },
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  text: {
    textAlign: 'center'
  },
  margin: {
    margin: '10px'
  },
  cover: {
    width: 151
  }
});

const RewardText = withStyles({})(ListItemText);
function Coupons(props) {
  const { user, isAuthenticated } = props.auth;
  console.log(isAuthenticated, user);
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        {' '}
        <RewardText
          primary="REWARD BAR"
          secondary="Almost there!!!"
          className={classes.text}
        />
        <LinearProgress variant="determinate" color="secondary" value={50} />
      </Container>

      <Divider className={classes.margin} />

      <RewardText primary="DEALS FOR YOU" className={classes.text} />
      <Container maxWidth="sm">
        <Typography component="div">
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom>
                2 for $ 7.00{' '}
              </Typography>
              <Typography variant="h5" component="h2">
                BLT Sandwich
              </Typography>
            </CardContent>
            <CardActions>
              <Button className={classes.button} size="small">
                Apply this oupon
              </Button>
            </CardActions>
            <CardMedia
              className={classes.cover}
              image={user.imageUrl}
              title="Live from space album cover"
            />
          </Card>{' '}
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom>
                2 for $ 7.00{' '}
              </Typography>
              <Typography variant="h5" component="h2">
                BLT Sandwich
              </Typography>
            </CardContent>
            <CardActions>
              <Button className={classes.button} size="small">
                Apply this oupon
              </Button>
            </CardActions>
          </Card>{' '}
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom>
                2 for $ 7.00{' '}
              </Typography>
              <Typography variant="h5" component="h2">
                BLT Sandwich
              </Typography>
            </CardContent>
            <CardActions>
              <Button className={classes.button} size="small">
                Apply this oupon
              </Button>
            </CardActions>
          </Card>
        </Typography>
      </Container>
    </div>
  );
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Coupons);

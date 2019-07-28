import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/actions';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));
function Profile(props) {
  const { user, isAuthenticated } = props.auth;
  console.log(isAuthenticated, user);
  const classes = useStyles();

  return (
    <div>
      {' '}
      <List className={classes.root}>
        <ListItem>
          <h3>ACCOUNT DETAILS</h3>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Name" secondary={user.name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary={user.email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary={user.phone} />
        </ListItem>{' '}
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Address" secondary={user.address} />
        </ListItem>{' '}
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Text Alerts"
            secondary={user.isTxtActive ? 'Disabled' : 'Enabled'}
          />
        </ListItem>
      </List>
    </div>
  );
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);

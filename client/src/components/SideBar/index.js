import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/actions';

import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StoreLocatorIcon from '@material-ui/icons/NearMe';
import StoreIcon from '@material-ui/icons/StoreMallDirectory';
import StoreAislesIcon from '@material-ui/icons/ViewWeek';
import ItemLocatorIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ContactIcon from '@material-ui/icons/ContactSupport';
import LogOut from '@material-ui/icons/Cancel';
import BurgerBtn from '@material-ui/icons/Dehaze';

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
    height: '100vh',
    color: 'white',
    backgroundColor: '#394D59'
  },
  iconColor: {
    color: 'white'
  }
});

function SideBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}>
      <List>
        <ListItem button key="Profile">
          <Avatar
            alt="Remy Sharp"
            src={user.imageUrl}
            className={classes.avatar}
          />

          {/* <Image src={user.imageUrl} size="small" wrapped /> */}
          <ListItemText primary={user.name} />
        </ListItem>
        <Divider />
        <ListItem button key="My Dashboard">
          <ListItemIcon>
            <StoreIcon className={classes.iconColor} />
          </ListItemIcon>
          <ListItemText primary="My Dashboard" />
        </ListItem>
        <ListItem button key="Store Locator">
          <ListItemIcon>
            <StoreLocatorIcon className={classes.iconColor} />
          </ListItemIcon>
          <ListItemText primary="Store Locator" />
        </ListItem>
        <ListItem button key="Store Aisles">
          <ListItemIcon>
            <StoreAislesIcon className={classes.iconColor} />
          </ListItemIcon>
          <ListItemText primary="Store Aisles" />
        </ListItem>
        <ListItem button key="Item Locator">
          <ListItemIcon>
            <ItemLocatorIcon className={classes.iconColor} />
          </ListItemIcon>
          <ListItemText primary="Item Locator" />
        </ListItem>
        <ListItem button key="Cart">
          <ListItemIcon>
            <ShoppingCartIcon className={classes.iconColor} />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
        <ListItem button key="Receipt">
          <ListItemIcon>
            <ReceiptIcon className={classes.iconColor} />
          </ListItemIcon>
          <ListItemText primary="Receipt" />
        </ListItem>
        <ListItem button key="Contact Us">
          <ListItemIcon>
            <ContactIcon className={classes.iconColor} />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Log Out">
          <Link
            to="/"
            onClick={e => {
              e.preventDefault();
              props.logoutUser();
              console.log('im here');
            }}>
            <Button className={classes.iconColor}>
              <ListItemIcon>
                <LogOut className={classes.iconColor} />
              </ListItemIcon>
              Log Out
            </Button>
          </Link>
        </ListItem>
      </List>
    </div>
  );
  // const onLogoutClick = e => {
  //   e.preventDefault();
  //   props.logoutUser();
  // };
  const { user, isAuthenticated } = props.auth;
  console.log(isAuthenticated, user);
  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>
        <BurgerBtn />
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(SideBar);

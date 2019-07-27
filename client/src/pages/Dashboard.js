import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/actions';
// import Ciclos from '../components/Ciclos';
// import VideoPlayer from '../components/VideoPlayer';
// import VideoPlaylist from '../components/VideoPlaylist';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(this.props.auth, user);

    return <div className="container">Dashboard</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

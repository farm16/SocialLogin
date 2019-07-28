import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/actions';
import SideBar from '../components/SideBar';
import Moment from 'react-moment';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(this.props.auth, user);
    const dateToFormat = Date.now();

    return (
      <div>
        <SideBar />
        <div className="container">
          <div className="row">
            <div className="col-md-16">
              <h1> {user.name}'s Dashboard</h1>
              <h5>
                <Moment format="MMM Do YYYY" date={dateToFormat} />
              </h5>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {' '}
              <div className="container">
                {' '}
                <div className="row">
                  <h3>Welcome {user.name}</h3>
                </div>{' '}
                <div className="row">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style="width: 25%;"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100">
                      25%
                    </div>
                  </div>
                </div>
                <div className="row">welcome</div>
              </div>
            </div>
            <div className="col-md-6"> col 6</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div>
            <img src="https://via.placeholder.com/30" />
          </div>
          <div className="user-name">Ronald</div>
        </div>
        <div className="user-channels"></div>
      </div>
    );
  }
}

export default Sidebar;

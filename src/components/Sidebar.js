import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div id="user-img">
            <img src="https://www.gravatar.com/avatar/ae903df127f469f432ba627b9504ce02" />
          </div>
          <div className="user-name">Ronald</div>
        </div>
        <div className="user-channels"></div>
      </div>
    );
  }
}

export default Sidebar;

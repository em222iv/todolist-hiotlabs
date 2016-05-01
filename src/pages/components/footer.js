import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
          <div className="footer">
            <div id="itemLeft">
              2 items left
            </div>
            <div id="markAll">
              <a href="">Mark all as complete</a>
            </div>
          </div>
      );
   }
}

export default Footer

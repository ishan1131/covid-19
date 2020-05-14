import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <center>
              <p>
                <b>Developed By:Ishan Rijal</b>
              </p>
            </center>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <center>
          <i className="fa fa-phone icon">
            <b> +977-9808578938</b>
          </i>
          <i className="fa fa-envelope contact icon">
            <b> ishanrijal6@gmail.com</b>
          </i>
        </center>
      </div>
    );
  }
}

export default Footer;

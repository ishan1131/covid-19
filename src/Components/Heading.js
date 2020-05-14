import React, { Component } from "react";

class Heading extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            {" "}
            <center>
              {" "}
              <h1
                style={{
                  textIndent: 50,
                }}
              >
                C O V I D -19
              </h1>
            </center>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default Heading;

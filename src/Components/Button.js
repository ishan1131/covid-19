import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="col-sm-12">
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            let inputValue = document.getElementById("input").value;
            this.props.handleChange(inputValue);
          }}
        >
          <center>
            <input
              onChange={(e) => {
                if (e.target.value === "") {
                  this.props.handleBlur();
                }
              }}
              name="input"
              type="text"
              id="input"
              required
              placeholder="Search country..."
            />
          </center>
        </form>
      </div>
    );
  }
}

export default Button;

import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryUrl: props.countryUrl,
      countryName: [],
      output: [],
    };
  }

  fetctCountryDetails() {
    axios("https://covid19.mathdro.id/api/countries")
      .then((response) =>
        this.setState({ countryName: response.data.countries })
      )
      .catch((error) => console.log(error));
  }
  componentDidMount() {
    this.fetctCountryDetails();
  }

  render() {
    return (
      <div className="col-sm-12">
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            let inputValue = document.getElementById("input").value;
            let value =
              inputValue.charAt(0).toUpperCase() +
              inputValue.slice(1).toLowerCase();
            let country = this.state.countryName.map((name) => {
              return name.name;
            });
            let countryIndex = country.indexOf(value);
            if (countryIndex !== -1) {
              this.props.handleChange(country[countryIndex]);
            } else {
              document.getElementById("erroeMessage").style.display = "block";
            }
          }}
        >
          <center>
            <input
              onBlur={(e) => {
                e.target.value = "";
                document.getElementById("erroeMessage").style.display = "none";
                this.props.handleBlur();
              }}
              onChange={() =>
                (document.getElementById("erroeMessage").style.display = "none")
              }
              name="input"
              type="text"
              id="input"
              required
              placeholder="Search country..."
            />
          </center>

          <span id="erroeMessage" style={{ display: "none" }}>
            Please Enter valid Country
          </span>
        </form>
      </div>
    );
  }
}

export default Button;

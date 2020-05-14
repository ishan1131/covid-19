import React, { Component } from "react";
import axios from "axios";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryUrl: props.countryUrl,
      countryName: [],
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
      <div style={{ marginTop: 40 }}>
        <select
          className="form-control form-control-lg"
          default=""
          onChange={(e) => this.props.handleChange(e.target.value)}
        >
          <option>World</option>
          {this.state.countryName.map((name, index) => (
            <option key={index} value={name.name}>
              {name.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Button;

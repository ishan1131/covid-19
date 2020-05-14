import React, { Component } from "react";
import axios from "axios";
import CaseConfirmed from "./Case/CaseConfirmed";
import CaseRecovered from "./Case/CaseRecovered";
import CaseDeath from "./Case/CaseDeath";
import Graph from "./chart";
import Button from "./Button";
import Heading from "./Heading";
import Footer from "./Footer";

class CurrentData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalData: [],
      loading: false,
      url: `https://covid19.mathdro.id/api/`,
      confirmData: [],
      totalConfirmed: "",
      totalRecovered: "",
      totalDeath: "",
      date: "",
      name: "World",
    };
  }

  fetchData() {
    axios(this.state.url)
      .then((response) => {
        this.setState({
          date: response.data.lastUpdate,
          totalConfirmed: response.data.confirmed.value,
          totalRecovered: response.data.recovered.value,
          totalDeath: response.data.deaths.value,
          loading: true,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.fetchData();
  }
  handleChange = (countryName) => {
    if (countryName !== "World") {
      axios(`https://covid19.mathdro.id/api/countries/${countryName}`)
        .then((response) =>
          this.setState({
            date: response.data.lastUpdate,
            totalConfirmed: response.data.confirmed.value,
            totalRecovered: response.data.recovered.value,
            totalDeath: response.data.deaths.value,
            name: countryName,
          })
        )
        .catch((error) => console.log(error));
    } else {
      this.setState({ name: countryName });
      this.fetchData();
    }
  };

  render() {
    const {
      loading,
      name,
      totalConfirmed,
      totalDeath,
      totalRecovered,
      date,
    } = this.state;

    return (
      <div>
        <div className="container">
          <Heading />

          {loading ? (
            <div>
              <div className="container case-container">
                <div className="row">
                  <div className="col-sm-4">
                    <CaseConfirmed
                      name={name}
                      caseConfirmed={totalConfirmed}
                      date={date}
                    />
                  </div>
                  <div className="col-sm-4">
                    <CaseRecovered
                      name={name}
                      caseRecovered={totalRecovered}
                      date={date}
                    />
                  </div>
                  <div className="col-sm-4">
                    <CaseDeath name={name} caseDeath={totalDeath} date={date} />
                  </div>
                </div>
                <div className="container ">
                  <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                      <Button handleChange={this.handleChange} />
                    </div>
                    <div className="col-sm-2"></div>
                  </div>
                </div>
              </div>
              <div>
                <Graph
                  name={name}
                  caseConfirmedGraph={totalConfirmed}
                  caseRecoveredGraph={totalRecovered}
                  caseDeathGraph={totalDeath}
                />
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div>
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}
export default CurrentData;

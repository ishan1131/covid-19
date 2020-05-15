import React, { useEffect, useState } from "react";
import axios from "axios";
import CaseConfirmed from "./Case/CaseConfirmed";
import CaseRecovered from "./Case/CaseRecovered";
import CaseDeath from "./Case/CaseDeath";
import Graph from "./chart";
import Button from "./Button";
import Heading from "./Heading";
import Footer from "./Footer";

const CurrentData = () => {
  const [loading, setLoading] = useState(false);
  const [url] = useState(`https://covid19.mathdro.id/api/`);
  const [totalConfirmed, setTotalConfirmed] = useState(" ");
  const [totalRecovered, setTotalRecovered] = useState(" ");
  const [totalDeath, setTotalDeath] = useState(" ");
  const [date, setDate] = useState(" ");
  const [name, setName] = useState("World");
  const [changeUrl, setChangeUrl] = useState(" ");
  const [inputName, setinputName] = useState("World");

  const handleChange = (countryName) => {
    setinputName(countryName);
    setChangeUrl(`countries/${countryName}`);
  };
  const handleBlur = () => {
    setChangeUrl(``);
    setinputName("World");
  };
  const fetchData = () => {
    axios(`${url}${changeUrl}`)
      .then((response) => {
        setName(inputName);
        setDate(response.data.lastUpdate);
        setTotalConfirmed(response.data.confirmed.value);
        setTotalDeath(response.data.deaths.value);
        setTotalRecovered(response.data.recovered.value);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, [changeUrl]);

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
                    <Button
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
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
};

export default CurrentData;

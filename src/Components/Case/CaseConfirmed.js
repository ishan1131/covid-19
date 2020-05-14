import React from "react";
import "./case.css";
import CountUp from "react-countup";

function date(x) {
  const date = new Date(x);
  return date.toDateString();
}

function CaseConfirmed(props) {
  return (
    <div className="case card text-white bg-dark mb-3 ">
      <h3 className="card-header">Total Confirmed</h3>
      <p>
        <CountUp
          end={props.caseConfirmed}
          delay={0}
          separator=","
          duration={2}
        />
      </p>
      <p>{date(props.date)}</p>
      <h6>
        Numbers of people infected <br /> from COVID-19
      </h6>
    </div>
  );
}

export default CaseConfirmed;

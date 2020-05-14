import React from "react";
import CountUp from "react-countup";

function date(x) {
  const date = new Date(x);
  return date.toDateString();
}
function CaseRecovered(props) {
  return (
    <div className="case card text-white bg-dark mb-3">
      <h2 className="card-header">Total Recovered</h2>
      <p>
        <CountUp
          end={props.caseRecovered}
          delay={0}
          separator=","
          duration={2}
        />
      </p>
      <p>{date(props.date)}</p>
      <h6>
        Numbers of people recovered
        <br /> from COVID-19
      </h6>
    </div>
  );
}

export default CaseRecovered;

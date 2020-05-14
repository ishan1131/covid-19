import React from "react";
import CountUp from "react-countup";

function date(x) {
  const date = new Date(x);
  return date.toDateString();
}

function CaseDeath(props) {
  return (
    <div className="case card text-white bg-dark mb-3">
      <h2 className="card-header">Total Death</h2>
      <p>
        <CountUp
          className="card-text"
          end={props.caseDeath}
          delay={0}
          separator=","
          duration={2}
        />
      </p>
      <p className="card-text">{date(props.date)}</p>
      <h6>
        Numbers of people infected <br />
        from COVID-19
      </h6>
    </div>
  );
}

export default CaseDeath;

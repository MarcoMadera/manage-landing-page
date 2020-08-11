import React from "react";
import "./css/Differences.css";
import Difference from "./Difference";

const Differences = () => {
  return (
    <div className="Differences">
      <div className="differences__container">
        <div>
          <h1 className="differences__container__title">
            What’s different about Manage?
          </h1>
          <p className="differences__container__desc">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.{" "}
          </p>
        </div>
        <div>
          <Difference number="01" title="Track company-wide progress">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </Difference>
          <Difference number="02" title="Advanced built-in reports">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </Difference>
          <Difference number="03" title="Everything you need in one place">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </Difference>
        </div>
      </div>
    </div>
  );
};

export default Differences;

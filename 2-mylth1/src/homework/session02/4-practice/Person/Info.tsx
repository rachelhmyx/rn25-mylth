import React from "react";

interface InfoProps {
    personName ?: string;
    jobTitle ?: string;
}

function Info(props: InfoProps) {
  return (
    <>
      <div className="info">
        <h2 className="person-name">{props.personName}</h2>
        <p className="job-title">{props.jobTitle}</p>
      </div>
    </>
  );
}

export default Info;

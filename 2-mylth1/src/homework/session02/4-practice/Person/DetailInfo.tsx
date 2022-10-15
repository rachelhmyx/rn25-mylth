import React from "react";
import "../Person/style.css";

interface DetailInfoProps {
  dateOfBirth?: string;
  bloodType?: string;
  edu?: string;
  res?: string;
}

function DetailInfo(props: DetailInfoProps) {
  return (
    <>
      <table className="detail-info">
        <tr>
          <th>
            <i className="fas fa-calendar-alt"></i>DOB
          </th>
          <td>{props.dateOfBirth}</td>
        </tr>
        <tr>
          <th>
            <i className="fas fa-heart"></i>BG
          </th>
          <td>{props.bloodType}</td>
        </tr>
        <tr>
          <th>
            <i className="fas fa-graduation-cap"></i>EDU
          </th>
          <td>{props.edu}</td>
        </tr>
        <tr>
          <th>
            <i className="fas fa-map-marker-alt"></i>RES
          </th>
          <td>{props.res}</td>
        </tr>
      </table>
    </>
  );
}

export default DetailInfo;

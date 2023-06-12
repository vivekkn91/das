import React, { useState } from "react";
import axios from "axios";
// import Table from "react-bootstrap/Table";

import { useEffect } from "react";
export default function List() {
  const [data, setdata] = useState();
  // useEffect(() => {
  //   // const config = {
  //   //   headers: {
  //   //     Authorization: `token ` + localStorage.getItem("token"),
  //   //   },
  //   // };

  //   axios
  //     .get("https://prototype.sbulltech.com/api/v2/instruments")
  //     .then((res) => {
  //       console.log(res.data);
  //       setdata(res.data);
  //       // setdetails(res.data.details);
  //     });
  // }, []);
  return (
    <>
      <table>
        <thead>
          <tr className="background-grey black">
            <th> Name of your Client/Company</th>
            <th>Period of Audit </th>
            <th> Type of Audit </th>
            <th> Auditing Assigned to</th>
            <th>Audit Completion Process </th>
          </tr>
        </thead>

        <tbody>
          {/* {console.log(JSON.stringify(data))}
          {data.map((personData, key) => {
            return ( */}
          <>
            <tr>
              <td>Star Technologies</td>
              <td>01-Apr-2022 To 31-Mar-2023</td>
              <td>Tax Audit</td>
              <td>assign to</td>
              <div class="percentage-bar">
                <div
                  class="bar-fill"
                  style={{ width: "0%", borderRadius: "10px" }}
                ></div>
                <div class="bar-value">0%</div>
              </div>
            </tr>
            <tr>
              <td>Orion Hospital</td>
              <td>01-Apr-2021 To 31-Mar-2022</td>
              <td>Internal Audit</td>
              <td>Akash</td>
              <div class="percentage-bar">
                <div
                  class="bar-fill"
                  style={{ width: "40%", borderRadius: "10px" }}
                ></div>
                <div class="bar-value">40%</div>
              </div>
            </tr>
            <tr>
              <td>Season travels</td>
              <td>01-June-2022 To 31-Jan-2025</td>
              <td>Interim Audit</td>
              <td>Harish</td>
              <div class="percentage-bar">
                <div
                  class="bar-fill"
                  style={{ width: "70%", borderRadius: "10px" }}
                ></div>
                <div class="bar-value">70%</div>
              </div>
            </tr>
            <tr>
              <td>KP Retail</td>
              <td>01-Apr-2022 To 31-Mar-2023</td>
              <td>Statutory Audit</td>
              <td>Rahul + </td>
              <button className="greenbutton">completed</button>
            </tr>
            <tr>
              <td>ODPC Power Limited</td>
              <td>01-Apr-2021 To 31-Mar-2022</td>
              <td>Internal Audit</td>
              <td>Karthick</td>

              <div class="percentage-bar">
                <div
                  class="bar-fill"
                  style={{ width: "78%", borderRadius: "10px" }}
                ></div>
                <div class="bar-value">78%</div>
              </div>
            </tr>
          </>
          {/* ); })} */}
        </tbody>
      </table>
    </>
  );
}

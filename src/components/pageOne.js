import React from "react";
import { ReactComponent as SEARCH } from "../Icons/SEARCH.svg";
import Lsir from "./table_list";

export default function pageOne() {
  return (
    <div className="card">
      <div className="search-box">
        <div className="wrapper ">
          <SEARCH className="icon6 " />

          <input
            className="input6 background-grey"
            placeholder="Search Here .."
            // onChange={(e) => this.setState({ serchinput: e.target.value })}
            type="Search"
          />
        </div>
      </div>
      <Lsir />
    </div>
  );
}

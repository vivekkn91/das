import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Orders from "./components/pageTwo";
import Customers from "./components/pageThree";
import Produts from "./components/pageFour";

class Navigator extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Customers />} />
          {/*/======================== Admin ==========================//*/}
        </Routes>
        <Routes>
          <Route path="/orders" element={<Orders />} />
          {/*/======================== Admin ==========================//*/}
        </Routes>
        <Routes>
          <Route path="/customers" element={<Customers />} />
          {/*/======================== Admin ==========================//*/}
        </Routes>
        <Routes>
          <Route path="/produts" element={<Produts />} />
          {/*/======================== Admin ==========================//*/}
        </Routes>
      </>
    );
  }
}

function Home() {
  return (
    <div style={{ paddingTop: "20%", textAlign: "center" }}>
      <h1>Home</h1>
    </div>
  );
}
export default Navigator;

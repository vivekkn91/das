import React from "react";
import { useState } from "react";
const Sidebar = ({ show }) => (
  //   const [toggle, setToggle] = useState(false);
  <div>
    <div
      className="sidebar-form"
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        height: "100vh",
        zIndex: "999999999999999999999999999999",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative" }}>
          <img
            src="https://via.placeholder.com/150x150"
            alt="dummy image"
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />

          <div
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              width: "30px",
              height: "30px",
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            }}
          >
            <i
              className="fas fa-pen"
              style={{ fontSize: "14px", color: "#333" }}
            />{" "}
            <div class="close">
              <span class="first"></span>
              <span class="last"></span>
            </div>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", color: "#021274" }}>VINAY CHAUHAN </p>
      <p style={{ textAlign: "center", fontSize: "12px" }}>
        {" "}
        vinay@infigrowlabs.com{" "}
      </p>{" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "40px",
          padding: "5%",
        }}
      >
        <div
          href="#"
          style={{
            padding: "17px 0",
            borderBottom: "1px solid rgb(196 196 196 / 36%)",
            textDecoration: "none",
            width: "100%",
            display: "flex",
            justifyContent: "spacebetween",
          }}
        >
          <div>
            {" "}
            Keyboard shortcuts <br />
            press K to view shortcuts
          </div>
          <div>
            <label class="switch">
              <input type="checkbox" checked />
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <div
          href="#"
          style={{
            padding: "17px 0",
            borderBottom: "1px solid rgb(196 196 196 / 36%)",
            textDecoration: "none",
            width: "100%",
          }}
        >
          Account Settings
        </div>
        <div
          href="#"
          style={{
            padding: "17px 0",
            borderBottom: "1px solid rgb(196 196 196 / 36%)",
            textDecoration: "none",
            width: "100%",
          }}
        >
          Help & Support
        </div>

        <div
          href="#"
          style={{
            padding: "17px 0",
            borderBottom: "1px solid rgb(196 196 196 / 36%)",
            textDecoration: "none",
            width: "100%",
          }}
        >
          Plans & Billing
        </div>

        <div
          href="#"
          style={{
            color: "red",
            padding: "17px 0",
            borderBottom: "1px solid rgb(196 196 196 / 36%)",
            textDecoration: "none",
            width: "100%",
          }}
        >
          Sign Out
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;

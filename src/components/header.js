import React from "react";
import { ReactComponent as Bell } from "../Icons/Bell.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import Sidebar from "./rightbar";
import Profile from "./profile";

export default function Header() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const toggleShow = () => setShow(!show);
  const toggleShow2 = () => setShow2(!show2);

  document.body.classList.toggle("smoke", show);
  function openMenu() {
    document.querySelector(".l-navbar").classList.toggle("show");
  }
  return (
    <header className="header" id="header">
      <span onClick={openMenu} className="menu">
        <FontAwesomeIcon
          style={{ marginRight: "20px" }}
          icon={faBars}
          className="menu-icon"
        />
      </span>
      <span className="headericon">
        <div className="header_toggle"></div>
        <h6 className="header-text Mulish-Bold black">Auditing</h6>
      </span>
      <div className="headericon alert">
        <div className="left">
          <Bell onClick={toggleShow} />
        </div>
        {show && (
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
              <p className="font-24">Notifications</p>{" "}
              <div class="close2" onClick={toggleShow}>
                <span class="first"></span>
                <span class="last"></span>
              </div>
              <hr />
              <div>
                {" "}
                <h6 className="font-20">Awaiting approval from you </h6>
                <p className="font-20">
                  Manikandan has sent you an approval request Gokulam Park,
                  Coimbatore.
                </p>
                <p className="bluefont">
                  {" "}
                  May 6, 2022
                  <br /> 18:00 AM
                </p>{" "}
              </div>
              <hr />
              <div>
                {" "}
                <h6 className="font-20">
                  New auditina task has been assianed to you by CA Sathish 
                </h6>
                <p className="font-20">Aroma Group of Companies, Chennai</p>
                <p className="bluefont">
                  {" "}
                  May 3, 2022
                  <br /> ‘910. AM
                </p>{" "}
              </div>
              <hr />
              <div>
                <h6 className="font-20"> Permissions Granted </h6>
                <p className="font-20">
                  Your admin has granted you permission to pull tally data.
                </p>
                <p className="bluefont">
                  {" "}
                  May 4, 2022
                  <br /> 10:28 AM
                </p>
              </div>
              <hr />
              <div>
                {" "}
                <h6 className="font-20"> Permissions Granted </h6>
                <p className="font-20">
                  Your admin has granted you permission communicate with the
                  clients.
                </p>
                <p className="bluefont">
                  May 4,
                  <br /> 10:28 AM
                </p>
              </div>
              <hr />
            </div>
          </div>
        )}
        {show2 && (
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
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "150px",
                    }}
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
                    <div class="close" onClick={toggleShow2}>
                      <span class="first"></span>
                      <span class="last"></span>
                    </div>
                  </div>
                </div>
              </div>
              <p style={{ textAlign: "center", color: "#021274" }}>
                VINAY CHAUHAN{" "}
              </p>
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
        )}
        <div className="user-avt" onClick={toggleShow2}></div>
        {/* <div className="right">
          <span className="font-24 display-block Mulish-Bold black">
            Sumanto
          </span>
        
        </div> */}
      </div>
    </header>
  );
}

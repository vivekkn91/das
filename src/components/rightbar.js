import React from "react";

const Sidebar = ({ show }) => (
  <div>
    dadadaaaaaaaaaaaaaaaaaaaaaaaa
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
      <div class="close">
        <span class="first"></span>
        <span class="last"></span>
      </div>
      <hr />
      <div>
        {" "}
        <h6 className="font-20">Awaiting approval from you </h6>
        <p className="font-20">
          Manikandan has sent you an approval request Gokulam Park, Coimbatore.
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
          Your admin has granted you permission communicate with the clients.
        </p>
        <p className="bluefont">
          May 4,
          <br /> 10:28 AM
        </p>
      </div>
      <hr />
    </div>
  </div>
);

export default Sidebar;

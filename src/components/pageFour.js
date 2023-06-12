import "../App.css";
import Header from "./header";
import Sidebar from "./side";
import { ReactComponent as SEARCH } from "../Icons/SEARCH.svg";
import { ReactComponent as Customer } from "../Icons/filter.svg";
import { ReactComponent as Threedots } from "../Icons/threedots.svg";
import Order from "./order";
import List from "./custumer-list";
import { ListGroup } from "react-bootstrap";

function pageTwo() {
  return (
    <div className="App">
      <body id="body-pd">
        <Header />
        <Sidebar />
        <h2 className="Mulish-Bold margin-top-30 ">Edit Product</h2>
        <div className="card2 mobile-card">
          <div className="display-block  ">
            <label className="Mulish-Bold black">Id</label> <br />
            <input style={styles.right} className="mobile-inputs" type="text" />
          </div>
          <div className="dispaly-flex margin-top-5 avr padding-5">
            <div className="header_toggle3"></div>{" "}
            <div className="display-block  padding-5">
              <span className="Mulish-Bold black ">
                Select your product picture
              </span>
              <br />
              <button className="BlueButton">Browse</button>
            </div>
          </div>

          <div className="display-block margin-top-5">
            <label className="Mulish-Bold black">Prooduct Name </label> <br />
            <input style={styles.right} className="mobile-inputs" type="text" />
          </div>
          <div className="display-block margin-top-5">
            <label className="Mulish-Bold black margin-top-5">Category </label>{" "}
            <br />
            <select
              name="languages"
              id="lang"
              className="mobile-inputs"
              style={styles.right}
            >
              <option value="javascript">Drink </option>
              <option value="php">PHP</option>
              <option value="java">Java</option>
              <option value="golang">Golang</option>
              <option value="python">Python</option>
              <option value="c#">C#</option>
              <option value="C++">C++</option>
              <option value="erlang">Erlang</option>
            </select>
            {/* <input style={styles.right} type="text" /> */}
          </div>
          <div className="display-block margin-top-5">
            <label className="Mulish-Bold black">Price </label>
            <br />
            <input style={styles.right} className="mobile-inputs" type="text" />
          </div>
          <div className="display-block margin-top-5">
            <label className="Mulish-Bold black">Description </label>
            <textarea style={styles.text} className="mobile-inputs"></textarea>
          </div>
        </div>
        <div style={styles.avr2}>
          <button className="BlueButton">Save</button>{" "}
          <button style={styles.button} className="grey">
            cancel
          </button>
        </div>
      </body>
    </div>
  );
}

const styles = {
  right: {
    right: "-25px",
    top: "20px",
  },
  text: {
    height: "200px",
    right: "-25px",
    top: "20px",
  },
  button: {
    background: " #ffffff00",
    border: "none",
    fontSize: "21px",
    position: " relative",
    top: "32px",
    right: "-56px",
  },
  avr2: { marginBottom: "5%" },
};

export default pageTwo;

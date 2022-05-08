import React from "react";
import "./salary-style.css";

export default class Salarcal extends React.Component {
  state = { Total: "", extracharge: "", arts: "", payment: "" };
  constructor(props) {
    super(props);
    this.state = { Total: "", extracharge: "", arts: "", payment: "" };
  }

  exe1() {
    console.log(
      "Total: ",
      this.state.Total,
      " + extracharge: ",
      " - arts: ",
      this.state.extracharge
    );
    this.setState({
      payment:
        (parseInt(this.state.Total) + parseInt(this.state.extracharge)) +
        ((2-parseInt(this.state.arts))*250),
    });
    console.log(this.state);
  }

  render() {
    return (
    <div className="containerC">
      <div className="mainContainer">
        <h1 className="inn">Order Payment Calculator</h1>

        <h3>Total</h3>
        <input
        
          type="text"
          className="inputStyle"
          value={this.state.Total}
          onChange={(eve) => {
            this.setState({ Total: eve.target.value });
          }}
        />
        <br />
        <br />

        <h3>allowence    </h3>
        <input
            
          type="text"
          className="inputStyle"
          value={this.state.extracharge}
          onChange={(eve) => {
            this.setState({ extracharge: eve.target.value });
          }}
        />
        <br />
        <br />

        <h3>LeaveDays   </h3>
        <p>if a customer orders more than 2 arts they will provide a discount of 250 for the each and every order</p>

        <input
          type="text"
          
          className="inputStyle"
          value={this.state.arts}
          onChange={(eve) => {
            this.setState({ arts: eve.target.value });
          }}
        />
        <br />
        <br />

        <button
        className="btn btn-warning"
          onClick={() => {
            this.exe1();
          }}
        >
          Calculate the payment
        </button>
        <br />
        <br />

        <input type="text" className="outStyle" value={this.state.payment} />

        <br />
        <br />
      </div>
      </div>
    );
  }
}

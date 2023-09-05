import React, { Component } from 'react'
import loader from "./ZKZx.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loader} alt="loading" style={{width:"40px",height:"40px",margin:"40px 0px"}}/>
      </div>
    )
  }
}

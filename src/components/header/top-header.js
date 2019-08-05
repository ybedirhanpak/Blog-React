import React, { Component } from "react";
import logo from "../../logo.svg";
import "./header-style.css";

export default class TopHeader extends Component {
  render() {
    return (
      <section className="header-top">
        <div className="container box_1170">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <a href="index.html" className="logo">
                <img className="app-logo" src={logo} alt="Logo" />
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 search-trigger">
              <a href="#" className="search">
                <i className="lnr lnr-magnifier" id="search" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
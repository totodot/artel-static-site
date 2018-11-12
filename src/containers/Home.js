import React from "react";
import { withSiteData } from "react-static";
//
import logoImg from "../logo.jpg";

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: "center" }}>Witamy</h1>
    <img src={logoImg} alt="" style={{ display: "block", margin: "0 auto" }} />
  </div>
));

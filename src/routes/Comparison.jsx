import React from "react";
import Header from "../components/common/Header";
import OurPride from "../components/common/OurPride";
import CompTable from "../components/Comparison/CompTable";

function Comperison() {
  return (
    <div>
      <Header title={"Product Comparison"} />
      <CompTable />
      <OurPride />
    </div>
  );
}

export default Comperison;

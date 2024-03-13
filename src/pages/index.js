import React, { useState, useEffect } from "react";
import Layout_Tokyo from "../config/layout";

const IndexPage = () => {
  const TokyoRakugaki = "行為をもたらし";
  return (
    <body>
      <Layout_Tokyo children={TokyoRakugaki}>
        <br />

        <p>{TokyoRakugaki}</p>
      </Layout_Tokyo>
    </body>
  );
};

export default IndexPage;

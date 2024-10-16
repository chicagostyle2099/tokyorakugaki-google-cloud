import React from "react";
import LayoutTokyo from "../config/layout";
import FilterComponent from "../widgets/filter_elements/filter_elements"; // Adjust the path as necessary

const IndexPage = () => {
  const TokyoRakugaki = "行為をもたらし";
  return (
    <div>
      <LayoutTokyo>
        <div style={{ marginTop: '80px', marginBottom: '20px' }}>
          {/* <p>{TokyoRakugaki}</p> */}
        </div>
        <FilterComponent />
      </LayoutTokyo>
    </div>
  );
};

export default IndexPage;



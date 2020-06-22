import React from "react";

const style = {
  height: "50px",
  width: "50px",
};

export default function Interest({ title, logo }) {
  return (
    <div class="col-xs-12 col-sm-3">
      <div
        id="col_inner_id-5ee5f4f99cda6"
        class="fw-col-inner"
        data-paddings="0px 0px 0px 0px"
      >
        <div class="lm-info-block gray-default">
          <img src={logo} alt="logo" style={style} />
          <h4>{title}</h4>
          <span class="lm-info-block-text"></span>
        </div>
      </div>
    </div>
  );
}

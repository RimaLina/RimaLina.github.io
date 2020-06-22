import React from "react";

export default function certificate({ title, year, logo }) {
  return (
    <div class="col-xs-12 col-sm-6">
      <div
        id="col_inner_id-5ee5f4f9cee3e"
        class="fw-col-inner"
        data-paddings="0px 0px 0px 0px"
      >
        <div class="certificate-item clearfix">
          <div class="certi-logo">
            <img
              src={logo}
              alt="logo"
            />
          </div>
          <div class="certi-content">
            <div class="certi-title">
              <h4>{title}</h4>
              <br />
            </div>
            <div class="certi-date">
              <span>{year}</span>
            </div>
            <div class="certi-company">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

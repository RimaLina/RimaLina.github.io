import React from "react";

export default function Skills({title, percentage}) {
  return (
    <>
      <div class="clearfix">
  <h4>{title}</h4>
  <div class="skill-value">{percentage}%</div>
      </div>
      <div
        id="skill-98e7ecbfde121ce2f3c0c01ad34ea6aa"
        data-value={`${percentage}`}
        data-color="#54ca95"
        class="skill-container"
      >
        <div class="skill-percentage"></div>
      </div>
    </>
  );
}

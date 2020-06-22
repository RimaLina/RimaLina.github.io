import React from "react";

export default function ListItem({ timeRange, subtitle, title }) {
  return (
    <div class="timeline-item clearfix">
      <h5 class="item-period">{timeRange}</h5>
      <span class="item-company">{subtitle}</span>
      <h4 class="item-title">{title}</h4>
    </div>
  );
}

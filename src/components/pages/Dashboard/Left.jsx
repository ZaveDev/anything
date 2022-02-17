import React from "react";

export default function Left(props) {
  const { sidebarItems } = props;
  return (
    <>
      <div className="dashboard-left-top">
        <ul className="dashboard-left-list">
          {sidebarItems.map((ele) => {
            return <li className="dashboard-left-items">{ele.title}</li>;
          })}
        </ul>
      </div>
      <div className="dashboard-left-bottom"></div>
    </>
  );
}

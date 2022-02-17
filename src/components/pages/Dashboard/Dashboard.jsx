import React from "react";
import "./Dashboard.css";
import Left from "./Left.jsx";
import Middle from "./Middle.jsx";
import Right from "./Right.jsx";

export default function Dashboard() {
  const sidebarItems = [
    { title: "Today" },
    { title: "Tomorrow" },
    { title: "Upcoming" },
    { title: "Someday" },
    { title: "Completed" },
  ];
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-header-user">
          <i>🤦🏾</i>
          <span>Dude</span>
        </div>
        <div className="dashboard-header-icons">
          <i>🔥</i>
          <i>🔥</i>
          <i>🔥</i>
          <i>🔥</i>
        </div>
      </div>
      <div className="dashboard-inner-container">
        <div className="dashboard-left">
          <Left sidebarItems={sidebarItems} />
        </div>
        <div className="dashboard-middle">
          <Middle />
        </div>
        <div className="dashboard-right">
          <Right />
        </div>
      </div>
    </div>
  );
}

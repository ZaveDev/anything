import React from 'react';
import { Outlet } from "react-router-dom";
import "./loginRegister.css"

export default function LoginRegisterPage() {
  return (<div className="sign-in-page-container">
    <h2>Sign-in</h2>
    <Outlet />
  </div>)
}

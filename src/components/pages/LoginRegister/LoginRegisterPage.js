import React from 'react';
import { Outlet } from "react-router-dom";
import "./lr_styles/loginRegister.css";

export default function LoginRegisterPage() {
  return (
    <div className="form-container-register">
      <h2>Welcome</h2>
      <Outlet />
    </div>)
}

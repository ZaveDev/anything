import React from 'react';
import { Outlet} from "react-router-dom";

import Login from "./Login"
import Register from "./Register"

export default function LoginRegisterPage() {
  return (<div>
  <h2>Sign-in</h2>
    <Outlet/>
  </div>)
}

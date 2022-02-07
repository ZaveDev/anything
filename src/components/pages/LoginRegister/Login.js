import React from 'react';

export default function Login() {
  return <>
    <div className="login-container">

      <input className="form-input" type="text" placeholder='username' />

      <input className="form-input" type="text" placeholder='password' />
      <button >Submit</button>
    </div>
  </>;
}

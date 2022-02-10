import React from 'react';
import './lr_styles/register.css';
import { Paper, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';

// const useStyles = makeStyles({
//   // set themes in appjs later for light & dark mode
//   input: {
//     width: "30%",
//   },
//   paper: {
//     backgroundColor: "grey !important",
//     display:"flex",
//     justifyContent:"center",
//     flexDirection: "column",
//     width: "60%",
//     opacity:".6"
//   }

// });

export default function Register() {
  // const classes = useStyles();
  return <>
    {/* <div class="background"></div> */}
    <div class="register-container">
      <div class="register_form">
        <h2>Register</h2>
        <div className="user-fields">
          <div>
            <label>Enter your name</label>
            <input type="text" placeholder="Name"></input>
          </div>
          <div>
            <label>Create a username</label>
            <input type="text" placeholder="Username"></input>
          </div>
          <div>
            <label>Enter your email</label>
            <input type="text" placeholder="Email"></input>
          </div>
          <div>
            <label>Create a password</label>
            <input type="text" placeholder="Create a password"></input>
          </div>
          <div>
            <label>Confirm your password</label>
            <input type="text" placeholder="Confirm password"></input>
          </div>
        </div>
      </div>
    </div>
  </>;
}


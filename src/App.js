import './App.css';
import Test from "./components/test"
import {Page404, Dashboard, LoginRegisterPage,
Login,
Register
} from "./components/pages"

import ReactDOM from "react-dom";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Test/>}/>
        <Route path="404" element={<Page404/>}/>

        <Route path="Dashboard" element={<Dashboard/>}></Route>

        <Route path="signin" element={<LoginRegisterPage/>}>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>

    </Routes>

    </div>
  );
}

export default App;

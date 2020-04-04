import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Favicon from "react-favicon";

ReactDOM.render(
  <React.StrictMode>
    <Favicon url="https://previews.dropbox.com/p/thumb/AAwGtTCxcWrsRLFi-VzU-GT4k-9W1kPoK26h_4mE9zD4Sc2RLu8i_RxrMx2Wm_2zzE3TTAsLFWOEDRj8KHoSvGW56a0jpjhTEdroXxTzW7MC_axDI4qc35fbkuD4-LcVsbmaQhHWzQYJw99icNLiYtOsFXrlcvHZTsN5gGxyQeFBnud7YJ-TC2mcfGJBEymrKzSuFdGwjwqX493XDLLXvtpKCSMyomyWYTM2fi_-5T8UIiXleF4PmZCrPJBi9HOnnWrrftnZz-Mgt9PIuU7JQUygMQrsrEqXwUVmrUXFWKxi4lRKtVWTzkB6ONe2cHlscD488blYkHitXwxwnHoTSsSwq0xBeyKs6hqEEy1JRwWqMg/p.png?fv_content=true&size_mode=5" />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

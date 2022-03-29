import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import NavBar from "./modules/NavBar.js";
import QuienesSomos from "./pages/QuienesSomos.js";
import PaginaPrincipal from "./pages/PaginaPrincipal.js";
import PaginaPeregrinaciones from "./pages/PaginaPeregrinaciones.js";
import PaginaInformacion from "./pages/PaginaInformacion.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    return (
      <>
        <NavBar />
        <Router>
          <PaginaPrincipal path="/" />
          <QuienesSomos path="/quienesSomos" />
          <PaginaInformacion path="informacion" />
          <PaginaPeregrinaciones path="/peregrinaciones" />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
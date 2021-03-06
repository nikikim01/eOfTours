import React, { Component } from "react";
import { Router, Location } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import NavBar from "./modules/NavBar.js";
import QuienesSomos from "./pages/QuienesSomos.js";
import PaginaPrincipal from "./pages/PaginaPrincipal.js";
import PaginaPeregrinaciones from "./pages/PaginaPeregrinaciones.js";
import PaginaInformacion from "./pages/PaginaInformacion.js";
import Footer from "./modules/Footer.js";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes.js";
import GarantiaDeReembolso from "./pages/GarantiaDeReembolso.js";
import PoliticasDeCancelacion from "./pages/PoliticasDeCancelacion.js";
import PoliticasDePrivacidad from "./pages/PoliticasDePrivacidad.js";
import TerminosYCondiciones from "./pages/TerminosYCondiciones.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

class OnRouteChangeWorker extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.action();
    }
  }

  render() {
    return null;
  }
}

const OnRouteChange = ({ action }) => (
  <Location>
    {({ location }) => <OnRouteChangeWorker location={location} action={action} />}
  </Location>
);

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
          <PaginaInformacion path="/informacion" />
          <PaginaPeregrinaciones path="/peregrinaciones" />
          <PreguntasFrecuentes path="/preguntasFrecuentes" />
          <GarantiaDeReembolso path="/garantiaDeReembolso" />
          <PoliticasDeCancelacion path="/politicasDeCancelacion" />
          <PoliticasDePrivacidad path="/politicasDePrivacidad" />
          <TerminosYCondiciones path="terminosYCondiciones" />
          <NotFound default />
        </Router>
        <Footer />
        <OnRouteChange
          action={() => {
            window.scrollTo(0, 0);
          }}
        />
      </>
    );
  }
}

export default App;

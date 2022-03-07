/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import profile from "../images/profile.jpg";
class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ width: "100%", margin: "auto" }} className="home-page">
          <Grid container>
            <Grid item xs={12}>
              <div>
                <img src={profile} className="profile-img" />
              </div>
              <h1 className="name-css">
                Martín <span className="surname">Aja</span>
              </h1>
              <p className="sub-detail">Desarrollador fullstack</p>
              <br />
              <br />

              <div className="sub-detail2">
                <p>Seguime</p>
              </div>
              <p className="redes">
                <a href="https://github.com/mrtinaja">
                  <i class="fab fa-github " />
                </a>
                <a href="https://www.instagram.com/mrtinaja/">
                  <i class="fab fa-instagram " />
                </a>
                <a href="https://www.facebook.com/MartinJoseAja">
                  <i class="fab fa-facebook-f" />
                </a>
                <a href="https://www.linkedin.com/in/mart%C3%ADn-aja-92b10a49/">
                  <i class="fab fa-linkedin" />
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;

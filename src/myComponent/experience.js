/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Hidden, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

const particleoptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

AOS.init();
const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="exp_row" id="experience">
          <h1 className="name-css">
             <span className="surname">Experiencia laboral</span>
          </h1>
        </div>
        <div className="workchips">
          <Card className="workcard" data-aos="zoom-in-right">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Desarrollador fullstack</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{color: (19, 18, 16) }}>Gamalit</h2>
              <Typography variant="body2" color="inherit" component="p">
              Desarrollo   particular   para   creación   y   mantenimiento
tercerizado de aplicaciones dedicadas a manejo de stock
a través de NodeJS y bases de datos en Mongo DB. Soporte
técnico y recepción de tickets de consulta para asistencia
directa de clientes

              </Typography>
            </CardContent>
            <CardActions>
              <span>Junio 2019 -</span>-<span>Mayo 2020</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in">
            <CardContent className="work1">
              <h1 style={{ color: (19, 18, 16) }}>Desarrrollador fullstack</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              {" "}
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: (19, 18, 16)}}>Ing. Helgueta</h2>
              <Typography variant="body2" color="inherit">
              Programación a nivel general tanto back-end (Node) como
front-end  (Angular)  en  aplicaciones  de  control  stock  y
personal.  Desarrollo  de  diversos  sistemas  e-commerce
(React) enfocados en la venta por catalogo.

              </Typography>
            </CardContent>
            <CardActions>
              <span>Jan 2020 -</span>-<span>Agosto 2021</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in-left">
            <CardContent className="work1">
              <h1 style={{ color: (19, 18, 16) }}>Frontend Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: (19, 18, 16) }}>Freelance</h2>
              <Typography variant="body2" color="inherit" component="p">
                Trabajando actualmente con proyectos particualares a pedido. 
                Sitios e-commerce, web institucionales, y mantenimieneto de servicios.

              </Typography>
            </CardContent>
            <CardActions>
              <span>Junio 2019 -</span>
              <span>Presente</span>
            </CardActions>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Experience);

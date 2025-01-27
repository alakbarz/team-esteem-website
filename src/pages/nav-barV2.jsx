import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  white,
  esteemGreen,
  black,
  lightGreen,
  darkGrey,
} from "../components/colors";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { primaryFont } from "../components/fonts";
import EsteemLogo from "../assets/images/ESTEEM/Esteem Logo Full White.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display: "flex",
    // marginLeft: "10px",
    // justifyContent: "start",
  },
  title: {
    // flexGrow: 1,
  },
  appBarTransparent: {
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    boxShadow: "none",
    border: "none",
  },
  appBarSolid: {
    backgroundColor: "#202020",
    border: "none",
    boxShadow: "none",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarSolid");
  const navRef = React.useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 175) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.root} id="navbar">
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar>
          <ThemeProvider theme={primaryFont}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                className="footer-logos"
                id="esteem-square-logo"
                src={EsteemLogo}
                alt="ESTEEM"
                style={{
                  height: "40px",
                  margin: "8px 0 0 5px",
                }}
              ></img>
            </Link>
            <Link to="/team" style={{ textDecoration: "none" }}>
              <IconButton
                style={{
                  justifyContent: "center",
                  color: white,
                  size: "medium",
                }}
              >
                <Typography component={"span"} variant={"body1"}>
                  About
                </Typography>
              </IconButton>
            </Link>
            <Link to="/sponsors" style={{ textDecoration: "none" }}>
              <IconButton
                style={{
                  justifyContent: "center",
                  color: white,
                }}
              >
                <Typography component={"span"} variant={"body1"}>
                  Sponsorss
                </Typography>
              </IconButton>
            </Link>
            <Link to="/campaign" style={{ textDecoration: "none" }}>
              <IconButton
                style={{
                  justifyContent: "center",
                  color: white,
                }}
              >
                <Typography component={"span"} variant={"body1"}>
                  Campaigns
                </Typography>
              </IconButton>
            </Link>
            <Link to="/home-model" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  justifyContent: "center",
                  color: white,
                  background: lightGreen,
                  // right: "-265%",
                  position: "relative",
                  marginLeft: 10,
                  // bottom: "15px",
                  padding: "5px 15px 5px 15px",
                  borderRadius: "20px",
                }}
                edge="end"
              > 
                <Typography component={"span"} variant={"body1"}>
                  Our Home
                </Typography>
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <IconButton
                style={{
                  justifyContent: "center",
                  color: white,
                }}
              >
                <Typography component={"span"} variant={"body1"}>
                  Contact Us
                </Typography>
              </IconButton>
            </Link>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </div>
  );
}

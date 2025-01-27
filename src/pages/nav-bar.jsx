// import React, { Component } from "react";
// import { white, esteemGreen, black } from "../components/colors";
// import {
//   AppBar,
//   Typography,
//   ThemeProvider,
//   IconButton,
//   Toolbar,
//   Box,
// } from "@material-ui/core";
// import { primaryFont } from "../components/fonts";
// import styled from "styled-components";
// import "../index.css";
// import "../App.scss";
// import NavDrawer from "../components/drawer";
// import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

// const navButton = styled.button`
//   padding: 100px;
//   font-size: 40px;
//   color: red;
// `;

// const useStyles = makeStyles((theme) => ({
//   navbar: {
//     boxShadow: "none",
//     padding: 40,
//     position: "fixed",
//     margin: "auto",
//     backgroundColor: "transparent",
//   },
// }));

// const Nav = React.forwardRef((props, ref) => {
//   const classes = useStyles();

//   return (
//     <AppBar ref={ref} className={classes.navbar}>
//       <Toolbar
//         style={{
//           alignContent: "center",
//           marginRight: "auto",
//           position: "absolute",
//           top: "50%",
//           transform: "translateY(-50%)",
//         }}
//       >
//         <IconButton
//           style={{
//             fontWeight: "lighter",
//             justifyContent: "center",
//             color: white,
//           }}
//         >
//           <Typography
//             component={"span"}
//             variant={"body2"}
//             style={{ fontWeight: "lighter" }}
//           >
//             <NavDrawer />
//           </Typography>
//         </IconButton>
//         <ThemeProvider theme={primaryFont}>
//           <Link to="/">
//             {/* <IconButton
//               style={{
//                 fontWeight: "lighter",
//                 justifyContent: "center",
//                 color: esteemGreen,
//               }}
//             >
//               Home
//             </IconButton> */}
//             <IconButton
//               style={{
//                 fontWeight: "lighter",
//                 justifyContent: "center",
//                 color: white,
//                 size: "medium",
//               }}
//             >
//               <Typography component={"span"} variant={"body2"}>
//                 Home
//               </Typography>
//             </IconButton>
//           </Link>
//           <Link to="/team">
//             <IconButton
//               style={{
//                 fontWeight: "lighter",
//                 justifyContent: "center",
//                 color: white,
//                 size: "medium",
//               }}
//             >
//               <Typography component={"span"} variant={"body2"}>
//                 About
//               </Typography>
//             </IconButton>
//           </Link>
//           <Link to="/sponsors">
//             <IconButton
//               style={{
//                 fontWeight: "lighter",
//                 justifyContent: "center",
//                 color: white,
//               }}
//             >
//               <Typography component={"span"} variant={"body2"}>
//                 Sponsors
//               </Typography>
//             </IconButton>
//           </Link>
//         </ThemeProvider>
//       </Toolbar>
//     </AppBar>
//   );
// });

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.nav = React.createRef();
//   }
//   handleScroll = () => {
//     if (window.scrollY > 400) {
//       this.nav.current.style.backgroundColor = black;
//       this.nav.current.style.transition = "background-color 0.5s ease";
//     } else {
//       console.log(this);
//       this.nav.current.style.backgroundColor = "transparent";
//     }
//   };

//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll, true);
//   }

//   componentDidUpdate() {
//     document.removeEventListener("scroll", this.listener, true);
//   }

//   render() {
//     return (
//       <Box>
//         <Nav ref={this.nav} />
//       </Box>
//     );
//   }
// }
// // Home, ABout us,Sponsors more...
// export default Header;

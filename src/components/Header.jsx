import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../assets/images/logo-netflix.png";
import { useEffect, useState } from "react";
import { Link as RouteLink, useNavigate } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const hideHeader = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);

    return () => window.removeEventListener("scroll", hideHeader);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      //add classesName to a appbar no override some
      style={{
        backgroundColor: `${show ? "transparent" : "#111"}`,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Toolbar className={classes.toolbar}>
        <RouteLink to="/">
          <IconButton>
            <img src={logo} alt="logo" className={`${classes.logo}`} />
          </IconButton>
        </RouteLink>
        <RouteLink to="/profile">
          <IconButton>
            <Avatar variant="square" style={{ cursor: "pointer" }} />
          </IconButton>
        </RouteLink>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: "100px",
    cursor: "pointer",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default Header;

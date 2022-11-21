import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../assets/images/logo-netflix.png";
import HeroBanner from "../assets/images/netflix.jpg";
import { NetflixButton } from "../styled/NetflixButton";
import { NetflixInput } from "../styled/NetflixInput";
import { useState } from "react";
import SignUp from "./SignUp";

const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);

  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={`${classes.logo}`} />
      <NetflixButton className={classes.session}>Start Session</NetflixButton>
      <div className={classes.info}>
        {!signIn ? (
          <SignUp />
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Unlimited films ,TV programs and more.
            </Typography>
            <Typography variant="h5" gutterBottom>
              Watch anywhere, Cancel at any Time.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </Typography>
            <div className={classes.inputBlock}>
              <NetflixInput placeholder="Email address" />
              <NetflixButton>GET STARTED </NetflixButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${HeroBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repet",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "150px",
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 25,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4,h5,h6": {
      fontWeight: 800,
    },
  },
}));

export default Login;

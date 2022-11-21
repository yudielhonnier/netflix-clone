import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NetflixButton } from "../styled/NetflixButton";
import { NetflixInput } from "../styled/NetflixInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const signinSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5">SignUp</Typography>
      <form className={classes.form}>
        <NetflixInput
          placeholder="Email"
          value={email}
          type="email"
          className={classes.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <NetflixInput
          placeholder="Password"
          value={password}
          type="password"
          className={classes.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <NetflixButton
          wide="medium"
          radius
          type="submit"
          onClick={signinSubmit}
        >
          Sign In
        </NetflixButton>
        <Typography variant="subtitle2">
          New to Netflix ?{""}
          <span className={classes.signUpLink} onClick={register}>
            Sign Up now.
          </span>
        </Typography>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& h5": {
      marginTop: theme.spacing(2),
      width: "70%",
    },
  },
  form: {
    width: "80%",
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  password: {
    marginBottom: theme.spacing(4),
  },
  signUpLink: {
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default SignUp;

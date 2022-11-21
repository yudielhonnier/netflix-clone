import { makeStyles } from "@mui/styles";
import Header from "../components/Header";
import netflixAvatar from "../assets/images/Netflix-avatar.png";
import { Typography } from "@mui/material";
import Plans from "../components/Plans";
import { NetflixButton } from "../styled/NetflixButton";
import { auth } from "../firebase";
import { Link as RouteLink, useNavigate } from "react-router-dom";

const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="h3">Edit Profile</Typography>
      <div className={classes.info}>
        <img src={netflixAvatar} alt="avatar" className={`${classes.logo}`} />
        {/* <div className={classes.body}> */}
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant="h6">user email</Typography>
            <Typography className={classes.planText} variant="h5" gutterBottom>
              Plans
            </Typography>
            <Plans cost={7.99}>Netflix Standard</Plans>
            <Plans cost={11.99}>Netflix Basic</Plans>
            <Plans wide="medium" color="gray" cost={15.99}>
              Netflix Premium
            </Plans>
            <NetflixButton wide="fullWidth" onClick={signOut}>
              Sign Out
            </NetflixButton>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    // maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    width: "80%",
    display: "flex",
    "& img": {
      height: "100px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px",
    },
  },
  plans: {
    width: "100%",
  },
  planText: {
    borderBottom: "1px solid lightgray",
  },
}));

export default Profile;

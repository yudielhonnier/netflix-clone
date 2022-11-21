import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPrice } from "../features/PriceSlice";
import { NetflixButton } from "../styled/NetflixButton";

const Plans = ({ cost, children, color = "red", wide }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (cost) => {
    dispatch(setPrice(cost));
    navigate("/checkout");
  };

  return (
    <div className={classes.root}>
      <Typography style={{ fontSize: "1.2rem" }} variant="h5">
        {children}
      </Typography>
      <NetflixButton
        radius
        color={color}
        wide={wide}
        onClick={() => handleClick(cost)}
      >
        Susbcribe
      </NetflixButton>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      marginBottom: theme.spacing(2),
    },
  },
}));

export default Plans;

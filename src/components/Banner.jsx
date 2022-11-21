import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import movieApi from "../movieApi";
import { useState, useEffect } from "react";
import HeroBanner from "../assets/images/netflix-banner-990x299.jpg";
import { requests } from "../Requests";

const Banner = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState([]);

  const truncate = (paragraph, n) =>
    paragraph?.length > n ? `${paragraph.substr(0, n - 1)} ...` : paragraph;

  useEffect(() => {
    const fetchData = async () => {
      const request = await movieApi.get(requests.fetchNetflixOriginals);
      console.log(request);
      const random = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[random]);
      return request;
    };
    fetchData();
  }, []);

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        // position: "relative",
        // height: "840px",
        // objectFit: "contain",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // color: "#fff",
      }}
    >
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
      </div>
      <div className={classes.buttons}>
        <Button>Play</Button>
        <Button>My List</Button>
      </div>
      <Typography
        style={{ wordWrap: "break-word", margin: "2rem", width: "40%" }}
        variant="h6"
        component="h1"
      >
        {truncate(`${movie?.overview}`, 300)}
      </Typography>
      <div className={classes.gradient}></div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${HeroBanner})`,
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  content: {
    margin: "2rem",
  },

  buttons: {
    margin: "2rem",

    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51,51,51,0.5)",
    },
    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },
  gradient: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111  )",
  },
}));

export default Banner;

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import movieApi from "../movieApi";
import { useState, useEffect } from "react";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    const fetchData = async () => {
      const request = await movieApi.get(`${fetchUrl}`);

      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className={classes.root}>
      <Typography variant="h4">{title}</Typography>
      <div className={classes.posters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`${classes.poster} ${
                  isLargeRow && classes.posterLarge
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie?.backdrop_path
                }
                `}
                alt={movie?.name}
              />
            )
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    marginLeft: theme.spacing(4),
  },
  posters: {
    display: "flex",
    overflowy: "hidden",
    overflowx: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  poster: {
    maxHeight: "12rem",
    objectFit: "contain",
    marginRight: theme.spacing(1),
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  posterLarge: {
    maxHeight: "15rem",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },
}));

export default Row;

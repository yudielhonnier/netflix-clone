import { useState, useEffect } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";

function App() {
  const user = useSelector(selectUser);
  const clases = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("authUser", authUser);
      if (authUser) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unSubscribe;
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className={clases.root}>
        <BrowserRouter>
          <div className="App">
            {
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signin" element={<SignUp />} />
              </Routes>
            }
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: blue[500],
  //   },
  //   secondary: {
  //     main: lightBlue[500],
  //   },
  //   letters: {
  //     main: blue[100],
  //   },
  // },
});

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#111",
    minHeight: "100vh",
  },
}));

export default App;

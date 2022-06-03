import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import {
  validateOneTimeLink,
  resetPasswordThunk,
} from "../../redux/auth/thunks";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  authStatusSelector,
  resetPasswordInfoSelector,
} from "../../redux/auth/selectors";
import { AdminRoutes } from "../../config/routes";
import { initialValues, getValidationSchema } from "./config";
import { IResetPasswordCredentials } from "../../types/auth";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const theme = createTheme();

const ResetPasswordWrapper: React.FC = () => {
  const statuses = useAppSelector(authStatusSelector);
  const resetPasswordInfo = useAppSelector(resetPasswordInfoSelector);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const token = window.location.href.slice(-20);

  useEffect(() => {
    dispatch(validateOneTimeLink({ token: token }));
  }, [dispatch, token]);

  const handleSubmit = (values: IResetPasswordCredentials) => {
    dispatch(resetPasswordThunk(values));
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: getValidationSchema,
    onSubmit: (values) => {
      const data = {
        email: resetPasswordInfo?.email as string,
        password: values.password,
      };
      handleSubmit(data);
      navigate("/");
    },
  });

  return (
    <>
      {statuses[validateOneTimeLink.typePrefix]?.error ? (
        <Navigate replace to={AdminRoutes.Login} />
      ) : (
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: "url(https://source.unsplash.com/random)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
                <Typography component="h1" variant="h5">
                  Reset password
                </Typography>
                <form noValidate onSubmit={formik.handleSubmit}>
                  <Box sx={{ mt: 1 }}>
                    <TextField
                      onChange={formik.handleChange}
                      helperText={
                        formik.touched["password"] && formik.errors["password"]
                      }
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                    />
                    <TextField
                      onChange={formik.handleChange}
                      margin="normal"
                      required
                      fullWidth
                      name="repeatPassword"
                      label="Repeat password"
                      type="password"
                      id="repeatPassword"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Reset password
                    </Button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      )}
    </>
  );
};

export default ResetPasswordWrapper;

import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { ISignUpCredentials } from "../../types/auth";
import { signUpThunk } from "../../redux/auth/thunks";
import { initialValues, getValidationSchema } from "./config";
import { API } from "../../config/api";
import { User } from "../../types/users";
import { API_ROUTES } from "../../config/apiRoutes";
import { LoaderWrapper } from "./styles";
import { AdminRoutes } from "../../config/routes";

const theme = createTheme();

export default function SignUpSide() {
  const [admin, setAdmin] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (values: ISignUpCredentials) => {
    dispatch(signUpThunk(values));
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await API.get<User>(API_ROUTES.USERS.GET_ADMIN, {}).finally(
        () => setIsLoading(false)
      );
      setAdmin(data.data);
    };

    fetchData().catch(console.error);
  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: getValidationSchema,
    onSubmit: (values) => {
      const data = { email: values.email, password: values.password };
      handleSubmit(data);
    },
  });

  return (
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
        {isLoading ? (
          <LoaderWrapper>
            <CircularProgress />
          </LoaderWrapper>
        ) : admin ? (
          <Navigate replace to={AdminRoutes.Login} />
        ) : (
          <>
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
                  Sign Up
                </Typography>
                <form noValidate onSubmit={formik.handleSubmit}>
                  <Box sx={{ mt: 1 }}>
                    <TextField
                      onChange={formik.handleChange}
                      helperText={
                        formik.touched["email"] && formik.errors["email"]
                      }
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoFocus
                    />
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
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </ThemeProvider>
  );
}

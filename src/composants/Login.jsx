import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

export default function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(login);
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return <Navigate to="/admin" />;
  }

  let navigate = useNavigate();
  const enter = () => {
    let path = `/admin`;
    navigate(path);
  };
  
  return (
    <div style={{ padding: 30 }}>
      {loggedIn && <Navigate to="/admin" />}
      <Typography variant="h1" style={{ textAlign: "center" }}>
        bienvenue
      </Typography>
      <Paper>
        <form onSubmit={handleSubmit(enter)} noValidate>
          <Grid
            container
            spacing={3}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <TextField
                label="Username or Email"
                autoComplete="email"
                {...register("email", { required: "Required" })}
                error={!!errors?.email}
                helperText={errors?.email ? errors.email.message : null}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type={"password"}
                {...register("password", { required: "Required" })}
                error={!!errors?.password}
                helperText={errors?.password ? errors.password.message : null}
              ></TextField>
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth type="submit">
                {" "}
                Login{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Can remove HomeButton, only purpose is to test redirect functionality */}
    </div>
  );
}

import React, {  useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import {
  Box,
  Card,
  Tabs,
  Tab,
  TextField,
  Button,
  Typography,
  CardContent,
  CardActions,
  Divider,
  Alert
} from "@mui/material";
import { loginUser , signUpUser } from "../service/authService";
import { useDispatch, useSelector } from "react-redux";
import { getUser,isAuthenticated } from "../redux/reducers/auth/authSlice";
import { useNavigate } from "react-router-dom";
/**
 * Tailwind classes are passed via `className`.
 * MUI theme-based or layout styles can still be set via `sx`.
 */
export default function AuthPage() {
  const [tabValue, setTabValue] = useState(0);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [signUpDetails, setSignUpDetails] = useState({ email: "", password: "",first:"",last:"" });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setErrorMessage("");
  };
  
  const user = useSelector(getUser);
  const authenticated = useSelector(isAuthenticated);

  useEffect(() => {
    if(authenticated){
      console.log("User is authenticated");
      navigate("/dashboard");
    }
  }, [authenticated]);


  const handleLoginDetails = (loginData) => {
    setLoginDetails({ ...loginDetails, ...loginData });
  }
  const handleSignUpDetails = (signUpData) => {
    setSignUpDetails({ ...signUpDetails, ...signUpData });
  }

  const isActionDisabled = () => {
    if(tabValue === 0){
      return !loginDetails.email || !loginDetails.password || isLoading;
    } else{
      return !signUpDetails.email || !signUpDetails.password || !signUpDetails.first || !signUpDetails.last || isLoading;
    }
  }
  const handleAction = async () => {
    try {
        // dispatch(isLoading(true));
        setIsLoading(true);  
        setErrorMessage("");
        if(tabValue === 0){
          // Perform login action
          let response = await loginUser(loginDetails);
          if(response?.error) {
            setErrorMessage(response.error?.message);
          }
      
        } else{
          let response = await signUpUser({
            email: signUpDetails.email,
            password: signUpDetails.password,
            data: {first_name: signUpDetails.first, last_name: signUpDetails.last}
          });
        if(response?.error) {
          setErrorMessage(response.error?.message);
        }
        setTabValue(0);
      }
    } catch (error) {
      setErrorMessage("Please try again later");
    }finally{
      setIsLoading(false);
      
      // dispatch(isLoading(false));
    }   
  }
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center p-4">
      <Card
        sx={{
          width: { xs: "100%", sm: 400 },
          maxWidth: 500,
          // For spacing and box shadow
          boxShadow: 3,
        }}
        className="bg-white"
      >
        {/* Tabs for Login / Sign Up */}
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="flex justify-center"
        >
          <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
            <Tab label="Login" />
            <Tab label="Sign Up" />
          </Tabs>
        </Box>

        <CardContent>
          {errorMessage && <Alert severity="error" >  {errorMessage} </Alert> }
          {/** LOGIN FORM */}
          {tabValue === 0 && (
            <Box component="form" className="space-y-4 mt-4">
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                required
                onChange={(e) => handleLoginDetails({ email: e.target.value })}
                sx={{my:2}}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                onChange={(e) => handleLoginDetails({ password: e.target.value })}
                required
              />
            </Box>
          )}

          {/** SIGN-UP FORM */}
          {tabValue === 1 && (
            <Box component="form" className="space-y-4 mt-4">
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                required
                onChange={(e) => handleSignUpDetails({ email: e.target.value })}
                sx={{my:2}}
              />
              <Box className="flex space-x-4">
                <TextField
                  label="First Name"
                  type="text"
                  fullWidth
                  onChange={(e) => handleSignUpDetails({ first: e.target.value })}
                  required
                />
                <TextField
                  label="Last Name"
                  type="text"
                  fullWidth
                  required
                  onChange={(e) => handleSignUpDetails({ last: e.target.value })}
                />
              </Box>
              <TextField
                label="Password"
                type="password"
                fullWidth
                onChange={(e) => handleSignUpDetails({ password: e.target.value })} 
                required
              />
            </Box>
          )}
        </CardContent>

        <Divider />

        <CardActions className="p-4 hover:cursor-pointer">
          <Button variant="contained" color="primary"  fullWidth onClick={handleAction} disabled={isActionDisabled()}>
            <Typography variant="p" color="white">{tabValue === 0 ? "Login" : "Sign Up"}</Typography>
          </Button>
        </CardActions>

        {/** Optional: Additional links or text */}
        <Box className="text-center pb-4">
          {tabValue === 0 ? (
            <Typography variant="body2">
              Don&apos;t have an account?{" "}
              <Button onClick={() => setTabValue(1)} size="small">
                Sign Up
              </Button>
            </Typography>
          ) : (
            <Typography variant="body2">
              Already have an account?{" "}
              <Button onClick={() => setTabValue(0)}   size="small">
                Login
              </Button>
            </Typography>
          )}
        </Box>
      </Card>
    </div>
  );
}

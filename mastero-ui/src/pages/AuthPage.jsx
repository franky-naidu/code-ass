import React from "react";
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
  Divider
} from "@mui/material";

/**
 * Tailwind classes are passed via `className`.
 * MUI theme-based or layout styles can still be set via `sx`.
 */
export default function AuthPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
          {/** LOGIN FORM */}
          {tabValue === 0 && (
            <Box component="form" className="space-y-4 mt-4">
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                required
                sx={{my:2}}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
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
                sx={{my:2}}
              />
              <Box className="flex space-x-4">
                <TextField
                  label="First Name"
                  type="text"
                  fullWidth
                  required
                />
                <TextField
                  label="Last Name"
                  type="text"
                  fullWidth
                  required
                />
              </Box>
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
              />
            </Box>
          )}
        </CardContent>

        <Divider />

        <CardActions className="p-4 hover:cursor-pointer">
          <Button variant="contained" color="primary"  fullWidth>
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
              <Button onClick={() => setTabValue(0)} size="small">
                Login
              </Button>
            </Typography>
          )}
        </Box>
      </Card>
    </div>
  );
}

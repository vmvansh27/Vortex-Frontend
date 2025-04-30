import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
  Container,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const RegisterDeal = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    phone: "",
    customerName: "",
    mailingCountry: "",
    address: "",
    mailingCity: "",
    partnerSalesRep: "Jasmeet Bajaj",
    partnerSE: "Jasmeet Bajaj",
  });

  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "jobTitle",
      "customerName",
      "mailingCountry",
      "address",
      "mailingCity",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        tempErrors[field] = "This field is required";
      }
    });

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await API.post("/deals", formData);
        console.log("Deal submitted successfully:", res.data);
        setSnackbarOpen(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          phone: "",
          customerName: "",
          mailingCountry: "",
          address: "",
          mailingCity: "",
          partnerSalesRep: "Jasmeet Bajaj",
          partnerSE: "Jasmeet Bajaj",
        });
      } catch (error) {
        console.error("Error submitting deal:", error);
        alert(error.response?.data?.message || "Submission failed");
      }
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        // backgroundColor: '#060D18',
        background: " #45171d",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Back Button */}
      <IconButton
        onClick={() => navigate(-1)}
        sx={{
          position: "absolute",
          top: 24,
          left: 24,
          color: "#ffffff",
          zIndex: 2,
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#ffffff",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={4}
            align="center"
            sx={{ color: "#ffffff" }}
          >
            Register New Deal
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  InputLabelProps={{ style: { color: "#e8e8e8" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    color: "#fff",
                    mt: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  InputLabelProps={{ style: { color: "#e8e8e8" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    color: "#fff",
                    mt: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputLabelProps={{ style: { color: "#e8e8e8" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    color: "#fff",
                    mt: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  name="phone"
                  fullWidth
                  value={formData.phone}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: "#e8e8e8" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    color: "#fff",
                    mt: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Job Title"
                  name="jobTitle"
                  fullWidth
                  value={formData.jobTitle}
                  onChange={handleChange}
                  error={!!errors.jobTitle}
                  helperText={errors.jobTitle}
                  InputLabelProps={{ style: { color: "#e8e8e8" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    color: "#fff",
                    mt: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Customer Name"
                  name="customerName"
                  fullWidth
                  value={formData.customerName}
                  onChange={handleChange}
                  error={!!errors.customerName}
                  helperText={errors.customerName}
                  InputLabelProps={{ style: { color: "#e8e8e8" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    color: "#fff",
                    mt: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Country"
                  name="mailingCountry"
                  fullWidth
                  value={formData.mailingCountry}
                  onChange={handleChange}
                  error={!!errors.mailingCountry}
                  helperText={errors.mailingCountry}
                  InputLabelProps={{ style: { color: "#e8e8e8" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    color: "#fff",
                    mt: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  name="mailingCity"
                  fullWidth
                  value={formData.mailingCity}
                  onChange={handleChange}
                  error={!!errors.mailingCity}
                  helperText={errors.mailingCity}
                  InputLabelProps={{ style: { color: "#e8e8e8" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    color: "#fff",
                    mt: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  name="address"
                  fullWidth
                  multiline
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  error={!!errors.address}
                  helperText={errors.address}
                  InputLabelProps={{ style: { color: "#e8e8e8" } }}
                  InputProps={{ style: { color: "#fff" } }}
                  sx={{
                    color: "#fff",
                    mt: 1,
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e8e8e8",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel shrink sx={{ color: "#e8e8e8" }}>
                    Partner Sales Rep
                  </InputLabel>
                  <Select
                    name="partnerSalesRep"
                    value={formData.partnerSalesRep}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      color: "#fff",
                      mt: 1,
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e8e8e8",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e8e8e8",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e8e8e8",
                      },
                    }}
                  >
                    <MenuItem value="Jasmeet Bajaj">Jasmeet Bajaj</MenuItem>
                    <MenuItem value="Sanket Sawant">Sanket Sawant</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel shrink sx={{ color: "#e8e8e8" }}>
                    Partner SE
                  </InputLabel>
                  <Select
                    name="partnerSE"
                    value={formData.partnerSE}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      color: "#fff",
                      mt: 1,
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e8e8e8",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e8e8e8",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e8e8e8",
                      },
                    }}
                  >
                    <MenuItem value="Jasmeet Bajaj">Jasmeet Bajaj</MenuItem>
                    <MenuItem value="Sanket Sawant">Sanket Sawant</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                mt: 4,
                backgroundColor: "rgb(31, 11, 13)",
                "&:hover": { backgroundColor: "rgb(11, 6, 6)" },
                py: 1.5,
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Submit Deal
            </Button>
          </form>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Deal submitted successfully!
            </Alert>
          </Snackbar>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterDeal;

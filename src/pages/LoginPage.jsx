
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Paper, Link } from "@mui/material";
import API from "../api/axios";
import { useNavigate, Link as RouterLink } from "react-router-dom";
// import Logo from "../assets/logo.svg";
// import Globe from "../assets/globe2.png"; // Ensure the path is correct

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/auth/login", formData);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/home");
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Login failed.");
        }
    };

    return (
        <Box
            sx={{
                background:
                    "linear-gradient(to bottom,rgb(11, 6, 6),rgb(31, 11, 13), #45171d)",
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Top-left logo + India */}
            {/* <Box
                sx={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                }}
            >
                <img src={Logo} alt="logo" height="40" />
                <Typography sx={{ color: "#CDC9CE", fontWeight: 600 }}>India</Typography>
            </Box> */}

            {/* Globe image behind the login box */}
            {/* <Box
                sx={{
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    zIndex: 0,
                }}
            >
                <img src={Globe} alt="globe" style={{ height: 600 }} />
            </Box> */}

            {/* Login container */}
            <Container maxWidth="xs" sx={{ position: "relative", zIndex: 1 }}>
                {/* <Paper
                    elevation={6}
                    sx={{
                        p: 4,
                        borderRadius: 3,
                        width: '100%',
                        backgroundColor: "rgba(23, 39, 68, 0.75)", // semi-transparent
                        backdropFilter: "blur(8px)",
                        color: "#ffffff"
                    }}
                > */}
                <Paper
                    elevation={6}
                    sx={{
                        p: 4,
                        borderRadius: 3,
                        width: '100%',
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#ffffff"
                    }}
                >

                    <Typography
                        variant="h6"
                        mb={2}
                        align="center"
                        sx={{ color: '#ffffff', fontWeight: 'bold' }}
                    >
                        Already a Member?
                    </Typography>
                    <Typography
                        variant="h6"
                        mb={2}
                        align="center"
                        sx={{ color: '#ffffff', fontWeight: 'bold' }}
                    >
                        Login Now!
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            fullWidth
                            margin="normal"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            InputLabelProps={{ style: { color: "#e8e8e8" } }}
                            InputProps={{ style: { color: "#fff" } }}
                            sx={{
                                "& label": {
                                    color: "#e8e8e8",
                                },
                                "& label.Mui-focused": {
                                    color: "#e8e8e8",
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "#e8e8e8",
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#e8e8e8",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#e8e8e8",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#e8e8e8",
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            fullWidth
                            margin="normal"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            InputLabelProps={{ style: { color: "#e8e8e8" } }}
                            InputProps={{ style: { color: "#fff" } }}
                            sx={{
                                "& label": {
                                    color: "#e8e8e8",
                                },
                                "& label.Mui-focused": {
                                    color: "#e8e8e8",
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "#e8e8e8",
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#e8e8e8",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#e8e8e8",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#e8e8e8",
                                    },
                                },
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                backgroundColor: '#b00610',
                                '&:hover': {
                                    backgroundColor: '#a00610',
                                },
                                py: 1.5,
                                fontWeight: 'bold',
                                fontSize: '16px'
                            }}
                        >
                            Login
                        </Button>
                    </form>

                    <Box mt={2} textAlign="center">
                        <Typography variant="body2" sx={{ color: '#ccc' }}>
                            New here?{" "}
                            <Link component={RouterLink} to="/signup" underline="hover" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                                Create an account
                            </Link>
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default LoginPage;

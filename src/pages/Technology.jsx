import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar"; // Adjust path if needed
import OFA from "../assets/OFA.svg";
import OneFirewall from "../assets/oneFirewall.png";

const Technology = () => {
    return (
        <Box sx={{ backgroundColor: "#060D18", minHeight: "100vh", pb: 6 }}>
            <Navbar />

            <Container sx={{ pt: 8 }}>
                <Typography
                    variant="h3"
                    sx={{
                        background: "linear-gradient(to right, #a2a8d3, #e7eaf6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 200,
                        mb: 3,
                    }}
                    gutterBottom
                >
                    Solution Architecture
                </Typography>

                <Typography sx={{ color: "#e8e8e8", fontSize: "1.1rem", mb: 5 }}>
                    Our data platform retrieves events from security products and from
                    Cyber Threat Intelligence (CTI) sources, modelling them into a common
                    standard object used by the different solution modules to increase
                    defence.
                </Typography>

                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <img src={OFA} alt="OFA" style={{ maxWidth: "100%", height: "auto" }} />
                </Box>

                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <img
                        src={OneFirewall}
                        alt="OneFirewall"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Box>


            </Container>
        </Box>
    );
};

export default Technology;

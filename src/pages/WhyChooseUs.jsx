import React from "react";
import { Box, Typography, Grid, Paper, Container, Button } from "@mui/material";
import Navbar from "../components/Navbar";

// Dummy imports — replace with actual image paths
import SafeCityImg from "../assets/safe_city.png";
import DefenceImg from "../assets/defence.png";
import LawEnforcementImg from "../assets/law_enforcement.png";
import BankingImg from "../assets/banking.png";

const useCases = [
  {
    title: "SAFE CITY",
    description: "Network design, bandwidth & storage.",
    image: SafeCityImg,
  },
  {
    title: "DEFENCE",
    description: "Border surveillance and a lot more.",
    image: DefenceImg,
  },
  {
    title: "LAW ENFORCEMENT AGENCIES",
    description: "Network performance, bandwidth and storage.",
    image: LawEnforcementImg,
  },
  {
    title: "BANKING & FINANCE",
    description: "Health, safety and environment.",
    image: BankingImg,
  },
];

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,rgb(11, 6, 6),rgb(31, 11, 13), #45171d)",
      }}
    >
      <Navbar />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 2, color: "#e8e8e8" }}
        >
          Notable Use Cases
        </Typography>
        <Typography
          align="center"
          sx={{ mb: 5, fontSize: "1.05rem", color: "#e8e8e8" }}
        >
          The Omni Suite has a vast variety of use-cases and some of those are
          listed below.
        </Typography>

        <Grid
          container
          spacing={6}
          justifyContent="center"
          wrap="wrap" // Responsive wrap
        >
          {useCases.map((useCase, index) => (
            <Grid item key={index}>
              <Paper
                elevation={3}
                sx={{
                  width: 250,
                  height: 360,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                  borderRadius: 2,
                  textAlign: "center",
                  border: "1px solid #ddd",
                }}
              >
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ color: "red", mb: 1 }}
                >
                  {useCase.title}
                </Typography>

                <Box
                  sx={{
                    width: "100%",
                    height: 150,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={useCase.image}
                    alt={useCase.title}
                    sx={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2 }}
                >
                  {useCase.description}
                </Typography>

                <Button
                  size="small"
                  variant="text"
                  sx={{
                    color: "#1976d2",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                  }}
                >
                  Learn More
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;

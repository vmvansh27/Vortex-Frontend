import { Box, Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Laptop from "../assets/laptop.png";

function HomePage() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom,rgb(11, 6, 6),rgb(31, 11, 13), #45171d)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, sm: 6, md: 12 },
          py: { xs: 4, md: 10 },
          gap: { xs: 4, md: 10 },
        }}
      >
        {/* Text Section */}
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography
            variant="h3"
            sx={{
              background: "#e8e8e8",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
            gutterBottom
          >
            Enterprise solutions
          </Typography>
          <Typography
            variant="h3"
            sx={{
              background: "#e8e8e8",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
            gutterBottom
          >
            for video and image
          </Typography>
          <Typography
            variant="h3"
            sx={{
              background: "#e8e8e8",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
            gutterBottom
          >
            compression
          </Typography>

          {/* Buttons */}
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e50914",
                color: "#fff",
                px: 3,
                "&:hover": {
                  backgroundColor: "#b00610",
                },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#e50914",
                color: "#e50914",
                px: 3,
                "&:hover": {
                  backgroundColor: "#e50914",
                  color: "#fff",
                },
              }}
            >
              Contact Sales
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "right" }}>
          <img
            src={Laptop}
            alt="laptop"
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;

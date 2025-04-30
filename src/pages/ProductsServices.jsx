import { Box, Typography, Grid, Paper, Link } from "@mui/material";
import OmniCompressor from "../assets/OmniCompressor.png";
import OmniStream from "../assets/OmniStream.png";
import OmniImage from "../assets/OmniImage.png";
import OmniMedical from "../assets/OmniMedical.png"; // Add these images
import OmniViewer from "../assets/OmniViewer.png";
import Navbar from "../components/Navbar";

export default function ProductsAndServices() {
  const products = [
    {
      title: "OmniCompressor",
      image: OmniCompressor,
    },
    {
      title: "OmniStream",
      image: OmniStream,
    },
    {
      title: "OmniImage",
      image: OmniImage,
    },
    {
      title: "OmniMedical",
      image: OmniMedical,
    },
    {
      title: "OmniViewer",
      image: OmniViewer,
    },
  ];

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom,rgb(11, 6, 6),rgb(31, 11, 13), #45171d)",
        minHeight: "100vh",
        pb: 8,
        // px: { xs: 2, md: 6 },
      }}
    >
      <Navbar />
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#e8e8e8", fontWeight: "bold", mb: 8, mt: 8 }}
      >
        Products & Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                maxWidth: "250px",
                borderRadius: 4,
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 2, color: "#111" }}
                >
                  {product.title}
                </Typography>
                <Box
                  component="img"
                  src={product.image}
                  alt={product.title}
                  sx={{
                    width: "100%",
                    height: 150,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: "inline-block",
                    mt: 2,
                    color: "red",
                    fontWeight: 500,
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "#b30000",
                    },
                  }}
                >
                  Learn More →
                </Link>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

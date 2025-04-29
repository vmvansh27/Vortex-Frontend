import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Globe from "../assets/globe2.png";

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
                background: 'linear-gradient(to bottom, #142d4c, #113f67, #38598b, #455d7a)',
                minHeight: '100vh',
            }}
        >
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: { xs: 3, sm: 6, md: 12 },
                    py: { xs: 4, md: 10 },
                    gap: { xs: 4, md: 10 },
                }}
            >
                {/* Text Section */}
                <Box sx={{ flex: 1, textAlign: 'left' }}>
                    <Typography variant="h3" sx={{
                        background: 'linear-gradient(to right, #a2a8d3, #e7eaf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 200,
                    }} gutterBottom>
                        Actionable Threat
                    </Typography>
                    <Typography variant="h3" sx={{
                        background: 'linear-gradient(to right, #a2a8d3, #e7eaf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 200,
                    }} gutterBottom>
                        Intelligence for
                    </Typography>
                    <Typography variant="h3" sx={{
                        background: 'linear-gradient(to right, #a2a8d3, #e7eaf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 200,
                    }} gutterBottom>
                        real-time protection
                    </Typography>
                    <Typography variant="h6" sx={{
                        background: 'linear-gradient(to right, #a2a8d3, #e7eaf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 200,
                        mt: 2,
                    }}>
                        Welcome to partner portal.
                    </Typography>
                </Box>

                {/* Globe Image */}
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'right' }}>
                    <img
                        src={Globe}
                        alt="globe"
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                            height: 'auto',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;

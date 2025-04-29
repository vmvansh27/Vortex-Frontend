// import { Box, Typography, Grid, Paper, Link } from "@mui/material";
// import SecurityIcon from "@mui/icons-material/Security";
// import StorageIcon from "@mui/icons-material/Storage";
// import BugReportIcon from "@mui/icons-material/BugReport";
// import DnsIcon from "@mui/icons-material/Dns";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import ShieldIcon from "@mui/icons-material/Shield";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// export default function ProductsAndServices() {
//     const products = [
//         {
//             title: "World Crime Feeds",
//             description:
//                 "World Crime Feeds (WCF) is a comprehensive API-driven database, aggregating malicious actor data and (IoCs) in IPv4, domain, and URL formats.",
//             icon: SecurityIcon,
//         },
//         {
//             title: "WCF Agent",
//             description:
//                 "WCF Agent seamlessly integrates World Crime Feeds, fortifying network perimeters with modular cybersecurity efficiency.",
//             icon: StorageIcon,
//         },
//         {
//             title: "Security Binary",
//             description:
//                 "Security Binary, a product crafted by OneFirewall, gathers threat intelligence on malicious binary files and identifies malware threats.",
//             icon: BugReportIcon,
//         },
//         {
//             title: "DNS OneDefender",
//             description:
//                 "A highly secure and reliable resolver. Designed to fortify your network against cyber threats, it delivers enhanced protection by filtering domain queries.",
//             icon: DnsIcon,
//         },
//         {
//             title: "OFA Mobile",
//             description:
//                 "Product meticulously engineered by OneFirewall, a mobile application featuring VPN service, safeguarding against phishing, malware, and ransomware threats.",
//             icon: PhoneAndroidIcon,
//         },
//         {
//             title: "Secure Communication",
//             description:
//                 "Introducing SOCS (Secure Owned Communication Service) by OneFirewall for secure real-time communications using on-premises deployment.",
//             icon: ShieldIcon,
//         },
//     ];

//     return (
//         <Box
//             sx={{
//                 bgcolor: "#0B0C10",
//                 minHeight: "100vh",
//                 py: 8,
//                 px: { xs: 2, md: 8 },
//             }}
//         >
//             <Typography
//                 variant="h4"
//                 align="center"
//                 sx={{ color: "#FFFFFF", fontWeight: "bold", mb: 6 }}
//             >
//                 Products & Services
//             </Typography>

//             <Grid
//                 container
//                 spacing={4}
//                 justifyContent="center"
//             >
//                 {products.map((product, index) => (
//                     <Grid
//                         item
//                         key={index}
//                         sx={{
//                             flex: "0 0 300px", // fixed width
//                             maxWidth: "300px", // maximum width
//                         }}
//                     >
//                         <Paper
//                             elevation={0}
//                             sx={{
//                                 p: 4,
//                                 height: "100%",
//                                 bgcolor: "#0B0C10",
//                                 border: "1px solid #1F2833",
//                                 borderRadius: 4,
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 justifyContent: "space-between",
//                                 transition: "transform 0.3s ease",
//                                 "&:hover": {
//                                     transform: "translateY(-8px)",
//                                     borderColor: "#66FCF1",
//                                 },
//                             }}
//                         >
//                             <Box sx={{ mb: 3 }}>
//                                 <product.icon sx={{ fontSize: 40, color: "#66FCF1", mb: 2 }} />
//                                 <Typography variant="h6" sx={{ color: "#FFFFFF", mb: 1 }}>
//                                     {product.title}
//                                 </Typography>
//                                 <Typography sx={{ color: "#C5C6C7", fontSize: "0.95rem" }}>
//                                     {product.description}
//                                 </Typography>
//                             </Box>

//                             <Link
//                                 href="#"
//                                 underline="none"
//                                 sx={{
//                                     display: "inline-flex",
//                                     alignItems: "center",
//                                     color: "#66FCF1",
//                                     fontWeight: "bold",
//                                     mt: 2,
//                                     "&:hover": {
//                                         textDecoration: "underline",
//                                     },
//                                 }}
//                             >
//                                 Read More&nbsp; <ArrowForwardIcon sx={{ fontSize: 18 }} />
//                             </Link>
//                         </Paper>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Box>
//     );
// }

import { Box, Typography, Grid, Paper, Link } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import StorageIcon from "@mui/icons-material/Storage";
import BugReportIcon from "@mui/icons-material/BugReport";
import DnsIcon from "@mui/icons-material/Dns";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ShieldIcon from "@mui/icons-material/Shield";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavBar from "../components/Navbar";

export default function ProductsAndServices() {
    const products = [
        {
            title: "World Crime Feeds",
            description:
                "World Crime Feeds (WCF) is a comprehensive API-driven database, aggregating malicious actor data and (IoCs) in IPv4, domain, and URL formats.",
            icon: SecurityIcon,
        },
        {
            title: "WCF Agent",
            description:
                "WCF Agent seamlessly integrates World Crime Feeds, fortifying network perimeters with modular cybersecurity efficiency.",
            icon: StorageIcon,
        },
        {
            title: "Security Binary",
            description:
                "Security Binary, a product crafted by OneFirewall, gathers threat intelligence on malicious binary files and identifies malware threats.",
            icon: BugReportIcon,
        },
        {
            title: "DNS OneDefender",
            description:
                "A highly secure and reliable resolver. Designed to fortify your network against cyber threats, it delivers enhanced protection by filtering domain queries.",
            icon: DnsIcon,
        },
        {
            title: "OFA Mobile",
            description:
                "Product meticulously engineered by OneFirewall, a mobile application featuring VPN service, safeguarding against phishing, malware, and ransomware threats.",
            icon: PhoneAndroidIcon,
        },
        {
            title: "Secure Communication",
            description:
                "Introducing SOCS (Secure Owned Communication Service) by OneFirewall for secure real-time communications using on-premises deployment.",
            icon: ShieldIcon,
        },
    ];

    return (
        <Box
            sx={{
                // bgcolor: "#0B0C10",
                background: 'linear-gradient(to bottom, #142d4c, #113f67, #38598b, #455d7a)',
                // backgroundColor: '#060D18',
                minHeight: "100vh",
                // py: 8,
                // px: { xs: 2, md: 8 },
            }}
        >
            <NavBar></NavBar>
            <Typography
                variant="h4"
                align="center"
                sx={{ color: "#e8e8e8", fontWeight: "bold", mb: 6, mt: 8 }}
            >
                Products & Services
            </Typography>

            <Grid
                container
                spacing={4}
                justifyContent="center"
            >
                {products.map((product, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12} sm={6} md={4} // Exactly 3 cards per row on desktop
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                width: "300px", // fixed width
                                height: "380px", // fixed height
                                // bgcolor: "#0B0C10",
                                // border: "1px solid #1F2833",
                                borderRadius: 3,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    borderColor: "#455d7a",
                                    background: 'linear-gradient(to bottom, #040404, #113f67, #455d7a)',
                                },
                                // borderRadius: 3,
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                color: "#e8e8e8",
                            }}
                        >
                            <Box >
                                <product.icon sx={{ fontSize: 40, color: "#e8e8e8", mb: 2 }} />
                                <Typography variant="h6" sx={{ color: "#e8e8e8", mb: 1 }}>
                                    {product.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#C5C6C7",
                                        fontSize: "0.95rem",
                                        overflow: "hidden",
                                    }}
                                >
                                    {product.description}
                                </Typography>
                            </Box>

                            {/* <Link
                                href="#"
                                underline="none"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    color: "#e8e8e8",
                                    fontWeight: "bold",
                                    mt: 2,
                                    "&:hover": {
                                        textDecoration: "none",
                                        color: "black"

                                    },
                                }}
                            >
                                Read More&nbsp; <ArrowForwardIcon sx={{ fontSize: 18 }} />
                            </Link> */}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

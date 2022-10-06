import { Container, Typography, useMediaQuery, Box } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"


export default function Projects() {
    const m700 = useMediaQuery("(max-width: 700px)")

    return (<>
        <Typography variant={m700 ? 'h2': 'h1'} component='h1' color="#fff" mb={1.5}>
                {"<Projects />"}
        </Typography>
        <Container 
            data-aos="fade-right"
            maxWidth="md" 
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "16px 32px",
                gap: "8px",
                borderRadius: m700 ? "0" : "20px",
                backdropFilter: "blur(12px)",
                color: "#fff",
                textAlign: "center",
                transition: ".4s",
                boxShadow: "0px 4px 100px 15px #122D5A",
                "&:hover": {
                    transform: "scale(1.02) !important"
                }
            }}
        >
            <Typography variant="h5" component="span" sx={{ whiteSpace: "pre-wrap" }}>
                Among all my projects, I would like to highlight only few I'm really proud of:{"\n"}
                2 web-sites and 1 bot
            </Typography>
            <Grid2 container spacing={2}>
                <Grid2 xs={6}>
                    <Box>
                        <Typography variant="h6">amv</Typography>
                        <Typography variant="body1">
                            This is a pet project. Prototype of TikTok, but just for anime lovers. 
                            Now the web-site exists only for computer users, because I still haven't made the mobile version :(
                        </Typography>
                        <Typography variant="caption">
                            (full documentation can be studied in the <a href="https://github.com/mrskyguy/amv.net" target="_blank" rel="noopener noreferrer">
                                <Typography color="#fff" variant="caption" sx={{ textDecoration: "underline" }}>github repository</Typography>
                            </a>)
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 xs={6}>
                    <Box>
                        <Typography variant="h6">probiotic</Typography>
                        <Typography variant="body1">
                            It's a commercial project. Online shop for buying vitamins, probiotics and normoflorins.
                            It's almost done (99% of the work is completed). In the near future you will able to see on the Internet.  
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 xs={12}>
                    <Box>
                        <Typography variant="h6">autopostingbot</Typography>
                        <Typography variant="body1">
                            That's also a commercial project. Telegram bot to automate chat mailing
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Container>
    </>)
}

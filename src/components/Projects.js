import { Container, Typography, useMediaQuery } from "@mui/material"


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
                padding: "16px 32px",
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
            Projects
        </Container>
    </>)
}

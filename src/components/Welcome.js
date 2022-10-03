import backgroundImg from '../img/bg-1.jpg'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Box, Container, Typography } from '@mui/material'


export default function Welcome() {
    const m700 = useMediaQuery("(max-width: 700px)")
    console.log(m700)
    return (
        <Box 
            sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "auto 100vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100%"
            }}
        >
            <Container maxWidth="md" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "200px",
                borderRadius: "24px",
                backdropFilter: "blur(12px)",
                color: "#fff",
                textAlign: "center"
            }}>
                <Typography variant={m700 ? 'h5' : 'h4'} component='h2'>
                    Hi, there! I'm Zaur, 17 yo, Moscow student
                </Typography>
                <Typography variant="subtitle2" component="span">and also</Typography>
                <Typography variant={m700 ? 'h6' : 'h5'} component="p">
                    <Typography color="#35b4b0" variant={m700 ? 'h6' : 'h5'} component="span">
                        Ambitious
                    </Typography> FrontEnd developer
                </Typography>
            </Container>
        </Box>
    )
}

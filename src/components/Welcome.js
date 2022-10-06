import React from 'react'
import Aos from 'aos'
import backgroundImg from '../img/bg-1.jpg'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Box, Container, Typography } from '@mui/material'


export default function Welcome() {
    React.useEffect(() => {
        Aos.init({ duration: 700 })
    }, [])

    const m700 = useMediaQuery("(max-width: 700px)")

    return (
        <Box 
            sx={{
                backgroundImage: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), 
                    url(${backgroundImg})
                `,
                backgroundSize: "auto 100vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100%",
                overflow: "hidden"
            }}
        >
            <Container 
                data-aos="fade-up"
                maxWidth="md" 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "200px",
                    borderRadius: m700 ? "0" : "20px",
                    backdropFilter: "blur(12px)",
                    color: "#fff",
                    textAlign: "center",
                    transition: ".4s",
                    boxShadow: "0px 4px 50px 8px #35b4b0",
                    "&:hover": {
                        transform: "scale(1.02) !important"
                    }
                }}
            >
                <Typography variant={m700 ? 'h5' : 'h4'} component='h2' mt="auto">
                    Hi there. I'm Zaur, 17 yo, Moscow student
                </Typography>
                <Typography variant="subtitle2" component="span">and also</Typography>
                <Typography variant={m700 ? 'h6' : 'h5'} component="p">
                    <Typography color="#35b4b0" variant={m700 ? 'h6' : 'h5'} component="span">
                        Ambitious
                    </Typography> FrontEnd developer
                </Typography>
                <Typography variant="caption" sx={{mt: "auto"}}>
                    Design isn't my strong side, so don't evaluate strictly)
                </Typography>
            </Container>
        </Box>
    )
}

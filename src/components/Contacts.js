import React from "react"
import { Container, Typography, useMediaQuery, Box } from "@mui/material"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faInstagram, faGithub, faVk } from "@fortawesome/free-brands-svg-icons"


export default function Contacts() {
    const [isTelegramHover, setIsTelegramHover] = React.useState(false)
    const [isInstagramHover, setIsInstagramHover] = React.useState(false)
    const [isVkHover, setIsVkHover] = React.useState(false)
    const [isGithubHover, setIsGithubHover] = React.useState(false)

    const m700 = useMediaQuery("(max-width: 700px)")
    const m400 = useMediaQuery("(max-width: 400px)")

    return (<>
        <Typography variant={m700 ? 'h2': 'h1'} component='h1' color="#fff" mb={1.5}>
                {"<Contacts />"}
        </Typography>
        <Container 
            data-aos="fade-left"
            maxWidth="md" 
            sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "16px 32px",
                borderRadius: m700 ? "0" : "20px",
                backdropFilter: "blur(12px)",
                color: "#fff",
                transition: ".4s",
                boxShadow: "0px 4px 100px 15px #122D5A",
                "&:hover": {
                    transform: "scale(1.02) !important"
                }
            }}
        >
            <Container maxWidth="xs" sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <a href="https://t.me/skyguy" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon 
                            icon={faTelegram} 
                            size={m400 ? "2x" : "3x"} 
                            onMouseEnter={() => {setIsTelegramHover(true)}} 
                            onMouseLeave={() => {setIsTelegramHover(false)}}
                            style={{color: "#fff"}}
                        />
                    </a>
                    <Typography variant="span" width={isTelegramHover ? "100px" : 0} sx={{ transition: ".4s", overflow: "hidden" }}>
                        Telegram
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <a href="https://instagram.com/_.skyguy._" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon 
                            icon={faInstagram} 
                            size={m400 ? "2x" : "3x"} 
                            onMouseEnter={() => {setIsInstagramHover(true)}} 
                            onMouseLeave={() => {setIsInstagramHover(false)}}
                            style={{color: "#fff"}}
                        />
                    </a>
                    <Typography variant="span" width={isInstagramHover ? "100px" : 0} sx={{ transition: ".4s", overflow: "hidden" }}>
                        Instagram
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <a href="https://vk.com/mrskyguy" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon 
                            icon={faVk} 
                            size={m400 ? "2x" : "3x"} 
                            onMouseEnter={() => {setIsVkHover(true)}} 
                            onMouseLeave={() => {setIsVkHover(false)}}
                            style={{color: "#fff"}}
                        />
                    </a>
                    <Typography variant="span" width={isVkHover ? "100px" : 0} sx={{ transition: ".4s", overflow: "hidden" }}>
                        Vk
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <a href="https://github.com/mrskyguy" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon 
                            icon={faGithub} 
                            size={m400 ? "2x" : "3x"} 
                            onMouseEnter={() => {setIsGithubHover(true)}} 
                            onMouseLeave={() => {setIsGithubHover(false)}}
                            style={{color: "#fff"}}
                        />
                    </a>
                    <Typography variant="span" width={isGithubHover ? "100px" : 0} sx={{ transition: ".4s", overflow: "hidden" }}>
                        Github
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth="sx">
                <Typography variant="h6" component="span" sx={{ fontSize: m400 ? "1em" : "1.3em" }}>
                    Here you can chat me, I will be glad to see your message. 
                    At the moment, <Typography variant="h6" component="span" sx={{ 
                        color: "#0f0", display: "inline", fontSize: "inherit"
                    }}>hirable</Typography> :)
                </Typography>
            </Container>
        </Container>
    </>)
}

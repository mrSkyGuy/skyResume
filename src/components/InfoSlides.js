import React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery'
import { Box } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

import backgroundImg from '../img/bg-3.jpg'
import DevPath from "./DevPath"
import Projects from './Projects';
import Contacts from './Contacts';


export default function InfoSlides() {
    const [value, setValue] = React.useState(1)
    const m570 = useMediaQuery("(max-width: 570px)")

    return (
        <Box 
            sx={{
                backgroundImage: `
                    linear-gradient(to top, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .7) 100%), 
                    linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .7) 100%), 
                    url(${backgroundImg})
                `,
                backgroundSize: "auto 100vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: m570 ? "16px" : "24px",
                height: "100vh",
                width: "100%",
                overflow: "hidden"
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                {value === 0 ? <Projects /> : value === 1 ? <DevPath /> : value === 2 ? <Contacts /> : null}
            </Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    
                    setValue(newValue);
                }}
                sx={{
                    background: "transparent",
                    backdropFilter: "blur(12px)",
                }}
            >
                <BottomNavigationAction label="Projects" icon={<EmojiEventsOutlinedIcon />} sx={{ color: "#fff" }} />
                <BottomNavigationAction label="DevPath" icon={<RouteOutlinedIcon />} sx={{ color: "#fff" }} />
                <BottomNavigationAction label="Contacts" icon={<AlternateEmailOutlinedIcon />} sx={{ color: "#fff" }} />
            </BottomNavigation>
        </Box>
    )
}

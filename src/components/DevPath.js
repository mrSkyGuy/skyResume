import React from 'react'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import BoyOutlinedIcon from '@mui/icons-material/BoyOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

import Typography from '@mui/material/Typography';


export default function DevPath() {
    const m700 = useMediaQuery("(max-width: 700px)")
    const m570 = useMediaQuery("(max-width: 570px)")

    return (<>
        <Typography variant={m700 ? 'h2': 'h1'} component='h1' color="#fff" mb={1.5}>
            {"<DevPath />"}
        </Typography>
        <Container 
            data-aos="fade"
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
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ 
                            m: 'auto 0', 
                            fontWeight: "100",
                            fontSize: m570 ? ".8em" : "1em" 
                        }}
                        align="right"
                        variant="body1"
                        color="#fff"
                    >
                        Summer, 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{
                            border: "1px solid #fff"
                        }}>
                            <BoyOutlinedIcon htmlColor='#222' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: 0, px: 2 }}>
                        <Typography variant="h5" component="span" sx={{ 
                                lineHeight: "0",
                                fontSize: m570 ? "1.3em" : "1.5em" 
                            }}>
                            Learning Python 
                        </Typography>
                        <Typography sx={{ fontSize: m570 ? "1em" : "1.2em" }}>Basics on YouTube</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ 
                            m: 'auto 0', 
                            fontWeight: "100",
                            fontSize: m570 ? ".8em" : "1em" 
                        }}
                        align="right"
                        variant="body1"
                        color="#fff"
                    >
                        Autumn, 2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{
                            border: "1px solid #fff"
                        }}>
                            <SchoolOutlinedIcon htmlColor='#222' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: 0, px: 2 }}>
                        <Typography variant="h5" component="span" sx={{ 
                                lineHeight: "0",
                                fontSize: m570 ? "1.3em" : "1.5em" 
                            }}>
                            Y.Lyceum  
                        </Typography>
                        <Typography sx={{ fontSize: m570 ? "1em" : "1.2em" }}>Basics, algorithms, OOP</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ 
                            m: 'auto 0', 
                            fontWeight: "100",
                            fontSize: m570 ? ".8em" : "1em" 
                        }}
                        align="right"
                        variant="body1"
                        color="#fff"
                    >
                        Spring, 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{
                            border: "1px solid #fff"
                        }}>
                            <SchoolOutlinedIcon htmlColor='#222' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: 0, px: 2 }}>
                        <Typography variant="h5" component="span" sx={{ 
                                lineHeight: "0",
                                fontSize: m570 ? "1.3em" : "1.5em" 
                            }}>
                            Graduate from Y.Lyceum  
                        </Typography>
                        <Typography sx={{ fontSize: m570 ? "1em" : "1.2em" }}>Flask, JS, HTML, CSS (SCSS)</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ 
                            m: 'auto 0', 
                            fontWeight: "100",
                            fontSize: m570 ? ".8em" : "1em" 
                        }}
                        align="right"
                        variant="body1"
                        color="#fff"
                    >
                        Summer, 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{
                            border: "1px solid #fff"
                        }}>
                            <AttachMoneyOutlinedIcon htmlColor='#222' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: 0, px: 2 }}>
                        <Typography variant="h5" component="span" sx={{ 
                                lineHeight: "0",
                                fontSize: m570 ? "1.3em" : "1.5em" 
                            }}>
                            Freelance
                        </Typography>
                        <Typography sx={{ fontSize: m570 ? "1em" : "1.2em" }}>
                            bots{!m700 && ": aiogram + telethon"}
                        </Typography>
                        <Typography sx={{ fontSize: m570 ? "1em" : "1.2em" }}>
                            sites{!m700 && ": FastAPI + React.js"}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ 
                            m: 'auto 0', 
                            fontWeight: "100",
                            fontSize: m570 ? ".8em" : "1em" 
                        }}
                        align="right"
                        variant="body1"
                        color="#fff"
                    >
                        Autumn, 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{
                            border: "1px solid #fff"
                        }}>
                            <SchoolOutlinedIcon htmlColor='#222' />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: 0, px: 2 }}>
                        <Typography variant="h5" component="span" sx={{ 
                                lineHeight: "0",
                                fontSize: m570 ? "1.3em" : "1.5em" 
                            }}>
                            Y.Intensive  
                        </Typography>
                        <Typography sx={{ fontSize: m570 ? "1em" : "1.2em" }}>i hope :)</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    </>)
}

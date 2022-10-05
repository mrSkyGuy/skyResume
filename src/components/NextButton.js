import React from 'react'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined'
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined'
import { Button } from '@mui/material'


export default function NextButton({ num, up }) {

    return (
        <Button
            onClick={() => {
                window.scrollTo({ 
                    top: up ? 0 : num * window.innerHeight, 
                    behavior: "smooth" 
                })
            }}
            size="large"
            sx={{
                position: "absolute",
                bottom: "8px",
                borderRadius: "50%",
                height: "60px",
                color: "#35b4b0",
                background: "#35b4b01f",
                "&:hover": {
                    background: "#35b4b02f"
                }
            }}
        >
            {
                up ? <KeyboardDoubleArrowUpOutlinedIcon fontSize='large' /> :
                <KeyboardDoubleArrowDownOutlinedIcon fontSize='large' />

            }
        </Button>
    )
}

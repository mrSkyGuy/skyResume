import React from 'react'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined'
import { Button } from '@mui/material'


export default function NextButton({ num }) {
    return (
        <Button
            onClick={() => {
                window.scrollTo({ top: num * window.innerHeight, behavior: "smooth" })
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
            <KeyboardDoubleArrowDownOutlinedIcon fontSize='large' />
        </Button>
    )
}

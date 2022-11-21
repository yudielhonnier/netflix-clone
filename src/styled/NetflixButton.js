import { InputBase } from "@mui/material"
import styled from "styled-components"


const handleWide = wide => {
    switch (wide) {
        case "fullWidth":
            return "100%"
        case "medium":
            return "260px"
        default:
            return "160px"

    }
}

export const NetflixButton = styled.button`
z-index:15;
background-color:${(props) => props.color === "gray" ? "lightgray" : "red"};
color:${(props) => props.color === "gray" ? "#000" : "#fff"};
border-radius:${({ radius }) => (radius) ? "5px" : null};
text-transform:inherit;
padding:15px;
font-size:1.1rem;
border:none;
outline:none;
cursor:pointer;
width:${({ wide }) => handleWide(wide)};
`

import {createTheme} from "@mui/material";


export const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: "vazir,roboto",
    },
    palette : {
        mode: 'dark',
        secondary : {
            main: "#171a1d",
        },
        primary :{
            main : "#50bec2",
        },
        info : {
            main : "#fff",
        },
        warning :{
            main : "#fb8c00",
        },
        success:{
            main : "#040301",
        }

    }
})

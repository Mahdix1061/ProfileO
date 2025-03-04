import NemoneKarHead from "./NemoneKarHead";
import NemoneKarCard from "./NemoneKarCard";
import {Box, Stack} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Aos from 'aos'
import "aos/dist/aos.css";
import {useEffect} from "react";

const MainNemoneKar = () => {

    useEffect(()=> {
        Aos.init({duration: 600});
    },[])

    return(
        <Box id={"NemoneKar"} bgcolor={"#171a1d"} width="100%" display={"flex"} alignItems="center" justifyContent={"center"} pt={30}>
            <Stack width={"90%"} justifyContent={"center"}>
                    <NemoneKarHead/>
                <Box display={"flex"} justifyContent={"center"}>
                <Grid container spacing={3} mt={20} pb={30}>
                    <Grid display={"flex"} justifyContent={"center"} data-aos={"fade-down"} lg={4} md={6} xs={12}><NemoneKarCard/></Grid>
                    <Grid display={"flex"} justifyContent={"center"} data-aos={"fade-down"} lg={4} md={6} xs={12}><NemoneKarCard/></Grid>
                    <Grid display={"flex"} justifyContent={"center"} data-aos={"fade-down"} lg={4} md={6} xs={12}><NemoneKarCard/></Grid>
                    <Grid display={"flex"} justifyContent={"center"} data-aos={"fade-down"} lg={4} md={6} xs={12}><NemoneKarCard/></Grid>
                    <Grid display={"flex"} justifyContent={"center"} data-aos={"fade-down"} lg={4} md={6} xs={12}><NemoneKarCard/></Grid>
                    <Grid display={"flex"} justifyContent={"center"} data-aos={"fade-down"} lg={4} md={6} xs={12}><NemoneKarCard/></Grid>
                    <Grid display={"flex"} justifyContent={"center"} data-aos={"fade-down"} lg={4} md={6} xs={12}><NemoneKarCard/></Grid>
                    <Grid display={"flex"} justifyContent={"center"} data-aos={"fade-down"} lg={4} md={6} xs={12}><NemoneKarCard/></Grid>
                    <Grid display={"flex"} justifyContent={"center"} data-aos={"fade-down"} lg={4} md={6} xs={12}><NemoneKarCard/></Grid>
                </Grid>
                </Box>
            </Stack>
        </Box>

    )
}
export default MainNemoneKar;
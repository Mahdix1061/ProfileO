import {Box, duration, LinearProgress, Stack, Typography} from "@mui/material";
import {Skills} from "../../../Data/Skills"
import Grid from "@mui/material/Unstable_Grid2";
import {useEffect} from "react";

import Aos from "aos";
import "aos/dist/aos.css";



const AboutMeSkills = () => {

    useEffect(() => {
        Aos.init({duration: 700});
    }, []);

    return(
        <Box display={"flex"} bgcolor={"#171a1d"} justifyContent="center" alignItems="center" width={"100%"} margin={"auto 0"} height={"100%"}  sx={{paddingBottom:{xs:"8rem",sm:"0rem"}}} >
             <Box width={"80%"} margin={"2rem auto"} display={"flex"} justifyContent={"center"} alignItems={"center"}>


                 <Grid container>

            {
                Skills.map((item,index) => (
                        <Grid xs={12} sm={12} md={6} lg={6} key={index} mt={4}>
                            <Stack spacing={2} mr={4} data-aos="fade-down" >
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Typography  color={"#fff"}>{item.name}</Typography>
                                    <Typography color={"#fff"} >{item.value+"%"}</Typography>
                                </Box>
                                    <LinearProgress variant={"determinate"} value={item.value} />
                            </Stack>
                        </Grid>
                ))
            }
                 </Grid>
             </Box>
        </Box>
    )
}
export default AboutMeSkills;


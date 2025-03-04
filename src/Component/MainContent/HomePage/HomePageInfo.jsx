import {LocationOn,MailOutlineRounded,PhoneRounded} from '@mui/icons-material/';
import {Box, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {motion} from "framer-motion";

const MotionBox = motion(Box);
const HomePageInfo = () => {
    return(
        <MotionBox initial={{x:400}} animate={{x:0}} transition={{duration:0.7}} display="flex" sx={{marginX:{sm:"10rem",xs:"2rem"}}}>
            <Grid container>
                <Grid lg={6} md={12} xs={12}>
                    <Stack mx={0} borderLeft={"1px solid #3b3a39"} px={2} spacing={1}>
                        <MailOutlineRounded sx={{color:"#fff"}}/>
                        <Typography color={"#605f5e"}>mahdiinarimanii@gmail.com</Typography>
                    </Stack>
                </Grid>
                <Grid lg={3} md={6} xs={12}>
                    <Stack mx={0} borderLeft={"1px solid #3b3a39"} px={2} spacing={1}>
                        <PhoneRounded sx={{color:"#fff"}}/>
                        <Typography color={"#605f5e"} >09914825771</Typography>
                    </Stack>
                </Grid>
                <Grid lg={3} md={6} xs={12}>
                    <Stack mx={0} borderLeft={"1px solid #3b3a39"} px={2} spacing={1}>
                        <LocationOn sx={{color:"#fff"}}/>
                        <Typography color={"#605f5e"}>ایران ، تبریز</Typography>
                    </Stack>
                </Grid>
            </Grid>

        </MotionBox>
    )
}
export default HomePageInfo;
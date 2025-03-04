import Grid from "@mui/material/Unstable_Grid2"
import {Box} from "@mui/material";
import AboutMeText from "./AboutMeText";
import AboutMeSkills from "./AboutMeSkills";




const MainAboutMe = () => {
    return(
        <Box id={"DarbareMan"} bgcolor={"#171a1d"} boxShadow={"100px 150px 400px #fff"}>
            <Grid container>
                <Grid md={6} xs={12}>
                    <AboutMeText/>
                </Grid>
                <Grid md={6} xs={12}>
                    <AboutMeSkills/>
                </Grid>
            </Grid>
        </Box>
    )
}
export default MainAboutMe;
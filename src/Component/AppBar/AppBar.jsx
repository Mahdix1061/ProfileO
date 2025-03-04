import {Box} from "@mui/material";
import AppBarLogo from "./AppBarLogo";
import AppBarMenu from "./AppBar.Menu";
import AppBarSide from "./AppBar.Side";


const AppBar = () => {
    return(
        <Box width="100%" height={"5rem"} display={"flex"} alignItems={"center"} justifyContent={"center"} backgroundColor={"#171a1d"} position={"fixed"}  zIndex={999} boxShadow={"100px 2px 400px #5c5a56"}>
            <Box display="flex" alignItems="center" justifyContent="space-between" height={1} width="90%" >
                <AppBarMenu/>
                <AppBarSide/>
                <AppBarLogo/>
            </Box>
        </Box>
    )
}
export default AppBar;
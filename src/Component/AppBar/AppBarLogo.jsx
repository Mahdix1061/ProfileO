import {Avatar, Box} from "@mui/material";
import {SX} from "../../Utils/hoverEl"


const AppBarLogo = () => {
    return(
        <Box sx={SX}>
                <Avatar src={require("../../Assets/pngtree-initials-m-logo-vector-circle-letter-m-logo-png-image_5284792.jpg")}/>
        </Box>
    )
}
export default AppBarLogo;
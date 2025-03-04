import {MenuItem} from '../../Data/MenuItem';
import {Box, Button} from "@mui/material";


const AppBarMenu =() => {
    return(
        <Box display={{
            xs:"none" , md:"flex"
        }}>
            {MenuItem.map((item, index) => (
                <Button href={item.tag} size={"large"} variant={"text"} color={"info"} key={index} sx={{fontWeight:500,fontSize:"1em",mx:"0.2rem","&:hover" :{
                        cursor: "pointer",
                    }}}>{item.name}</Button>
            ))}
        </Box>
    )
}
export default AppBarMenu;
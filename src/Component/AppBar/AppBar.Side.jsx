import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {SX} from "../../Utils/hoverEl"
import {MenuItem} from "../../Data/MenuItem";
import {useState} from "react";





const AppBarSide = () => {

    const [btnSide, setBtnSide] = useState(false);
    const  hndlSidebtn = ()=> {
        btnSide ? setBtnSide(false) : setBtnSide(true);
    }

    return(
        <>
            <Box  display={{
                xs:"flex" , md:"none"
            }}>
                <MenuRoundedIcon sx={SX} color={"info"} fontSize={"large"} onClick={hndlSidebtn}/>
            </Box>
            { btnSide && <Box zIndex={9999} sx={{
                height: "calc(100vh - 5rem)",
                backgroundColor: "#171a1d",
                width: "100%",
                position: "fixed",
                bottom: "0",
                right: "0",
            }}>
                <Stack spacing={3} mt={6}>
                    {MenuItem.map((item, index) => (
                        <Button onClick={hndlSidebtn} size={"large"} variant={"text"} color={"info"} key={index}
                             href={item.tag}   sx={{py: "1rem"}}>{item.name}</Button>
                    ))}
                </Stack>
            </Box>}
        </>
    )
}
export default AppBarSide;
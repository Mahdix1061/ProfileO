import {Stack} from "@mui/material";
import {Telegram,Instagram,GitHub,WhatsApp} from '@mui/icons-material';
import {motion} from "framer-motion";


const MotionStack = motion(Stack);
const SideInfo = ()=>{
    return(
        <MotionStack initial={{x:600}} animate={{x:0}} transition={{duration:1,type:"spring",stiffness:300}} position={"fixed"} right={30} top={252} spacing={2} display={{
            xs:"none",lg:"flex"
        }}>
            <a href={"https://github.com/Mahdix1061"} target={"_blank"}> <GitHub color={"primary"}/></a>
            <a href={"tg://resolve?domain=Mahdix1061"} target={"_blank"}> <Telegram color={"primary"}/></a>
            <a href={"https://www.instagram.com/_itsmeiti/"} target={"_blank"}> <Instagram color={"primary"}/></a>
            <a href={"https://api.whatsapp.com/send?phone=989914825771"} target={"_blank"}> <WhatsApp color={"primary"}/></a>
        </MotionStack>
    )
}
export default SideInfo;
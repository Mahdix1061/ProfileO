import {Box, Typography} from "@mui/material";
import {ReactTyped} from "react-typed"

import {string} from "../../../Data/ReactTypeItem"
import {ArrowLeft} from '@mui/icons-material';
import {motion} from "framer-motion";

const MotionT = motion(Typography);

const HomeTypeComponent = () => {
    return(
        <Box marginY={4} sx={{marginX:{sm:"10rem",xs:"2rem"}}}>
            <MotionT initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} sx={{fontSize:{xs:"1.5em",md:"1.7em",lg:"1.8em"}}} color={"primary"} >مهدی نریمانی</MotionT>
            <br/>
            <MotionT initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} color={"#fff"} variant={"overline"}  fontWeight={500}> <ArrowLeft/> </MotionT>
                    <ReactTyped
                    strings={string}
                    typeSpeed={90}
                    backSpeed={50}
                    smartBackspace={true}
                    loop
                    showCursor={false}
                    attr={""}
                    >
                        <MotionT initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} variant={"overline"} fontWeight={500} color={"#fff"} sx={{fontSize:{xs:"1.5em",sm:"1.8em",md:"2em"}}} ></MotionT>
                    </ReactTyped>
        </Box>
    )
}
export default HomeTypeComponent;